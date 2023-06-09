import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MikaTest from './MikaTest';
import ListerCompetences from './CV';
import Currencies from './TestApi';
import reportWebVitals from './reportWebVitals';
import TestSmartContract from './TestSmartContrat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MikaTest />
    <TestSmartContract />
    <ListerCompetences />
    <Currencies />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
