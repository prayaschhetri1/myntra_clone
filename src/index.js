import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { ProductContextProvider } from './ProductContext/products';
import { AuthContextProvider } from './AuthContext/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <ProductContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ProductContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

reportWebVitals();
