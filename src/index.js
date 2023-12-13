import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WishlistProvider from './Context/wishlist';
import BasketProvider from './Context/basket';
import BasketSliderProvider from './Context/basketSlider';
import WishlistSliderProvider from './Context/wishlistSlider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BasketProvider>
      <BasketSliderProvider>
        <WishlistProvider>
          <WishlistSliderProvider>
            <App />
          </WishlistSliderProvider>
        </WishlistProvider>
      </BasketSliderProvider>
    </BasketProvider>
  </React.StrictMode>
);

