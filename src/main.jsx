import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalCSS from './styles/GlobalStyles';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalCSS />
    <App />
  </React.StrictMode>
);
