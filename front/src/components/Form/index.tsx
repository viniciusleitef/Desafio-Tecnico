import { FormContainer, Header, FormFields } from './styles';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { formProps } from '../../types';
import { useClient } from '../../hooks/useClient';
import { useState } from 'react';

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
  const navigate = useNavigate();
  const { createNewClient, error } = useClient();
  const [showApiError, setShowApiError] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<formProps>();

  const onSubmit = async (data: formProps) => {
    console.log(data);
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
              {...register('name', { required: true, maxLength: 80 })}
            />
            <p className="validateError">
              {errors?.name?.type == 'maxLength' && `Máximo de 80 caracteres `}
              {errors?.name?.type == 'required' && `Campo obrigatório`}
            </p>
          </div>
          <div className="field">
            <input
              {...register('cpf', {
                required: 'Campo obrigatório',
                validate: (value) => {
                  const unmaskedValue = value.replace(/\D/g, '');
                  return (
                    unmaskedValue.length === 11 || 'CPF deve estar completo'
                  );
                },
                onChange: (e) => setValue('cpf', e.target.value),
              })}
              placeholder="CPF"
            />
            <p className="validateError">
              {errors?.cpf?.type == 'required' && `Campo obrigatório`}
              {errors?.cpf?.type == 'validate' && errors.cpf.message}
            </p>
          </div>
          <div className="field">
            <input
              className={errors?.email && 'errors'}
              type="text"
              placeholder="E-mail"
              {...register('email', { required: true })}
            />
            <p className="validateError">
              {errors?.email?.type == 'required' && `Campo obrigatório`}{' '}
            </p>
          </div>
          <div className="field">
            <div className="colorsBox">
              <select
                className={`colors ${errors?.favoriteColor && 'errors'}`}
                {...register('favoriteColor', {
                  validate: (value) => {
                    return value != '0';
                  },
                })}
              >
                <option value="0">Escolha uma cor</option>
                {colorsList.map((favoriteColor) => {
                  return (
                    <option key={favoriteColor} value={favoriteColor}>
                      {favoriteColor}
                    </option>
                  );
                })}
              </select>
              <p className="validateError">
                {errors?.favoriteColor?.type == 'validate' &&
                  `Campo obrigatório`}
              </p>
            </div>
          </div>
          <div className="field">
            <textarea
              className={`note ${errors?.note && 'errors'}`}
              placeholder="Observações..."
              {...register('note', { required: true })}
            />
            <p className="validateError">
              {errors?.note?.type == 'required' && `Campo obrigatório`}
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
