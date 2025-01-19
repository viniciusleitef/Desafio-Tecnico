import styled from 'styled-components';
export const HomeContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: ${(props) => props.theme['background']};
`;