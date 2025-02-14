import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ToastContainer position="top-right" closeOnClick/>
    <App />
  </>
);

