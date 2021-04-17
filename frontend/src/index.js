import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './theme/globalStyles';
import Theme from './theme/theme';
import './index.scss';

const rootElement = document.getElementById('root');

if(rootElement) {
  ReactDOM.render(
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  , rootElement);
}