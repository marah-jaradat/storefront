import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import cartReducer from "./slices/cart.slice.js";
import categoriesReducer from "./slices/categories.slice.js";
import productsReducer from "./slices/products.slice.js";

const reducers = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
