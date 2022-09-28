import React from 'react';
import ReactDOM from 'react-dom/client';
import './custom.scss'
import App from '~/App';
import GlobalStyles from '~/components/GlobalStyles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalStyles>
    <App />
  </GlobalStyles>,
);

