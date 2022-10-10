import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer, Flip } from 'react-toastify';
import GlobalCSS from './styles/GlobalStyles';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalCSS />
    <App />
    <ToastContainer transition={Flip} />
  </React.StrictMode>
);
