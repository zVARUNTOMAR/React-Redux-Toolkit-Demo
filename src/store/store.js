// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import  cart from "../store/cart-store";
import cartProduct from "./cart-product-store";

const store = configureStore({
  reducer: { cart: cart.reducer,cartProduct:  cartProduct.reducer },
});

export default store;
