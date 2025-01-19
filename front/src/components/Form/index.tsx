import { FormContainer, Header, FormFields } from './styles';
import { useForm } from 'react-hook-form';

interface formProps {
  name: string;
  cpf: string;
  email: string;
  color: string;
  note: string;
}
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
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<formProps>();

  const onSubmit = (data: formProps) => {
    console.log(data);
    //Chamada API
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
                onChange: (e) => setValue('cpf', e.target.value),
              })}
              placeholder="CPF"
            />
            <p className="validateError">
              {errors?.cpf?.type == 'required' && `Campo obrigatório`}
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
                className={`colors ${errors?.color && 'errors'}`}
                {...register('color', {
                  validate: (value) => {
                    return value != '0';
                  },
                })}
              >
                <option value="0">Escolha uma cor</option>
                {colorsList.map((color) => {
                  return (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  );
                })}
              </select>
              <p className="validateError">
                {errors?.color?.type == 'validate' && `Campo obrigatório`}
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
        </FormFields>
      </FormContainer>
    </>
  );
}
