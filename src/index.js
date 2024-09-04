import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignInUpContext from './Components/Context/SigninSignupContext';
import { Provider } from 'react-redux';
import Store from './Store';
import { CartProvider } from './Components/Context/cart';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SignInUpContext>
    <BrowserRouter>
    <CartProvider>
       <Provider store={Store}>
         <App />
      </Provider>
      </CartProvider>
      </BrowserRouter>
    </SignInUpContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
