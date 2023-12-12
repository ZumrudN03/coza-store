import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WishlistProvider from './Context/wishlist';
import BasketProvider from './Context/basket';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BasketProvider>
      <WishlistProvider>
        <App />
      </WishlistProvider>
    </BasketProvider>
  </React.StrictMode>
);

