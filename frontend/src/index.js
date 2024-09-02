import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import { UsuarioProvider } from './Context/Usuario.js';
import { CalculadoraAproveitamentoProvider } from './Context/CalculadoraAproveitamento.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <UsuarioProvider>
        <CalculadoraAproveitamentoProvider>
    <App />
        </CalculadoraAproveitamentoProvider>
    </UsuarioProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
