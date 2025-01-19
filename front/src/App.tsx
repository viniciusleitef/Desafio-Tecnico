import { defaultTheme } from './style/theme/default';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/global';
import { PageContainer } from './AppStyle';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PageContainer></PageContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}
