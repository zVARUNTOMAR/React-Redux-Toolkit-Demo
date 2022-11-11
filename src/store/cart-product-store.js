import { createSlice } from "@reduxjs/toolkit";

const cartProduct = createSlice({
  name: "cartProduct",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed : false
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const recItem = action.payload;
      const existingItem = state.items.find((item) => item.id === recItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: recItem.id,
          price: recItem.price,
          quantity: 1,
          totalPrice: recItem.price,
          name: recItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += recItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartProductActions = cartProduct.actions;
export default cartProduct;
