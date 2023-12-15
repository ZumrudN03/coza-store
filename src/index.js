import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WishlistProvider from "./Context/wishlist";
import BasketProvider from "./Context/basket";
import BasketSliderProvider from "./Context/basketSlider";
import WishlistSliderProvider from "./Context/wishlistSlider";
import FilterProductProvider from "./Context/filterProduct";
import FilterSearchProvider from "./Context/filterSeach";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BasketProvider>
      <BasketSliderProvider>
        <WishlistProvider>
          <WishlistSliderProvider>
            <FilterProductProvider>
              <FilterSearchProvider>
                <App />
              </FilterSearchProvider>
            </FilterProductProvider>
          </WishlistSliderProvider>
        </WishlistProvider>
      </BasketSliderProvider>
    </BasketProvider>
  </React.StrictMode>
);
