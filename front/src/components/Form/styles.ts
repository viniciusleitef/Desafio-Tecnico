import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 30rem;
  margin: 0 auto;
  padding: 1.5rem;
  background: ${(props) => props.theme['white']};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid ${(props) => props.theme['grey-100']};
  border-radius: 4px;
`;

export const Header = styled.header`
  width: 100%;
  margin-bottom: 2rem;
  display: flex;
  justify-content: start;
  align-items: center;
  h2 {
    color: ${(props) => props.theme['blue-300']};
  }
`;

export const FormFields = styled.form`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  //Input Style

  .field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .field > input {
    padding: 0.8rem 0.5rem;
    color: ${(props) => props.theme['grey-700']};
  }

  .field > input:focus::placeholder {
    color: ${(props) => props.theme['blue-300']};
  }

  //Select style

  .colorsBox {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .colors {
    padding: 0.2rem 0.25rem 0.8rem;
    color: ${(props) => props.theme['grey-500']};
    background-color: transparent;
    cursor: pointer;
  }

  .colors:focus {
    color: ${(props) => props.theme['blue-300']};
  }

  .colors > option {
    color: ${(props) => props.theme['grey-700']};
  }

  //Textarea style

  .note {
    resize: none;
    height: 4rem;
    padding: 0.8rem 0.5rem;
  }

  .note::placeholder {
    color: ${(props) => props.theme['grey-500']};
  }

  .note:focus::placeholder {
    color: ${(props) => props.theme['blue-300']};
  }

  .note::-webkit-scrollbar {
    width: 4px;
  }

  .note::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['blue-300']};
    border-radius: 4px;
  }

  //Submit button style

  .submitBtn button {
    width: 100%;
    padding: 0.825rem;
    margin-top: 1.5rem;
    background: ${(props) => props.theme['blue-300']};
    color: ${(props) => props.theme['white']};
    border: none;
    cursor: pointer;
    transition: all 0.2;
    border-radius: 4px;
  }

  .submitBtn button:hover {
    background: ${(props) => props.theme['blue-100']};
  }

  //erros

  .validateError {
    width: 100%;
    height: 1rem;
    padding: 0.2rem 0.5rem;
    font-size: 0.8rem;
    color: ${(props) => props.theme['red-300']};
  }

  .errors {
    border-bottom: 1px solid ${(props) => props.theme['blue-300']};
    box-shadow: none;
  }

  .apiError {
    width: 100%;
    text-align: center;
    color: ${(props) => props.theme['red-300']};
    font-size: 0.85rem;
  }
`;
