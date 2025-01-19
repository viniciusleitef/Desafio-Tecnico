import styled from 'styled-components';
export const SuccessContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: ${(props) => props.theme['background']};
  .content {
    width: 40rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
    padding: 1.5rem;
    background: ${(props) => props.theme['white']};
    border-radius: 8px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .icon {
    width: 5rem;
    height: 5rem;
    color: ${(props) => props.theme['green-500']};
  }
  header h1 {
    text-align: center;
  }
  p {
    text-align: center;
    color: ${(props) => props.theme['grey-700']};
  }
  button {
    padding: 1rem;
    background: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme['white']};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s;
  }
  button:hover {
    background: ${(props) => props.theme['green-300']};
  }
`;
