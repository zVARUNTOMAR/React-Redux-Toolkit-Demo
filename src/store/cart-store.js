import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { isVisible: false };

const CartStore = createSlice({
  name: "Cart",
  initialState: initialCartState,
  reducers: {
    toggleVisibility(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const cartActions = CartStore.actions;
export default CartStore;
