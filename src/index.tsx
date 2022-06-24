import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyle from './globalStyles';
import { standard } from './themes/standard';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={standard}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

