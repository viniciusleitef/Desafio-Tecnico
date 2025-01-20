import { FormContainer, Header, FormFields } from './styles';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { formProps } from '../../types';
import { useClient } from '../../hooks/useClient';
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useHookFormMask } from 'use-mask-input';

export function Form() {
  const colorsList = [
    'vermelho',
    'laranja',
    'amarelo',
    'verde',
    'azul',
    'anil',
    'violeta',
  ];

  // validate form data 
  const createClientFormSchema = z.object({
    name: z
      .string()
      .nonempty('O nome é obrigatório')
      .transform((name) => {
        return name
          .trim()
          .split(' ')
          .map((word) => {
            return word[0].toLocaleUpperCase().concat(word.substring(1));
          })
          .join(' ');
      }),
    cpf: z
      .string()
      .nonempty('O cpf é obrigatório')
      .regex(
        /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
        'O CPF deve conter exatamente 11 dígitos.'
      )
      .transform((cpf) =>
        cpf
          .replace(/\D/g, '')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      ),
    email: z
      .string()
      .nonempty('O email é obrigatorio')
      .email('Formato de e-mail inválido'),
    favoriteColor: z
      .string()
      .nonempty('A cor favorita é obrigatória')
      .refine((color) => color != '0', { message: 'Selecione uma cor' }),
    note: z.string(),
  });

  const navigate = useNavigate();
  const { createNewClient, error } = useClient();
  const [showApiError, setShowApiError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formProps>({
    resolver: zodResolver(createClientFormSchema),
  });

  //Aplly mask
  const registerWithMask = useHookFormMask(register);

  const onSubmit = async (data: formProps) => {
    console.log(data);

    // API Request
    const success = await createNewClient(data);
    console.log(success);
    if (!success) {
      setShowApiError(!success);
      return;
    }
    navigate('/success', { state: { canAccessSuccessPage: true } });
  };

  return (
    <>
      <FormContainer>
        <Header>
          <h2>Cadastro de clientes</h2>
        </Header>
        <FormFields onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <input
              className={errors?.name && 'errors'}
              type="text"
              placeholder="Nome completo"
              {...register('name')}
            />
            <p className="validateError">
              {errors.name && errors.name.message}
            </p>
          </div>

          <div className="field">

            {/* Applying mask */}
            <input
              type="text"
              placeholder="CPF"
              inputMode="numeric"

              {...registerWithMask('cpf', '999.999.999-99')}
              />

            <p className="validateError">{errors.cpf && errors.cpf.message}</p>
          </div>

          <div className="field">
            <input
              className={errors?.email && 'errors'}
              type="text"
              placeholder="E-mail"
              {...register('email')}
            />

            <p className="validateError">
              {errors.email && errors.email.message}
            </p>
          </div>

          <div className="field">
            <div className="colorsBox">
              <select
                className={`colors ${errors?.favoriteColor && 'errors'}`}
                {...register('favoriteColor')}
              >
                <option value="0">Escolha uma cor</option>

                {/* Display colors dynamically */}
                {colorsList.map((favoriteColor) => {
                  return (
                    <option key={favoriteColor} value={favoriteColor}>
                      {favoriteColor}
                    </option>
                  );
                })}
              </select>
              <p className="validateError">
                {errors.favoriteColor && errors.favoriteColor.message}
              </p>
            </div>
          </div>

          <div className="field">

            <textarea
              className={`note ${errors?.note && 'errors'}`}
              placeholder="Observações..."
              {...register('note')}
            />

            <p className="validateError">
              {errors.note && errors.note.message}
            </p>
          </div>

          <div className="submitBtn">
            <button type="submit">Enviar</button>
          </div>

          <p className="apiError">{showApiError && error}</p>
        </FormFields>
      </FormContainer>
    </>
  );
}
