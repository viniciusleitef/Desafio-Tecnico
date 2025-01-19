import { defaultTheme } from './style/theme/default';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
