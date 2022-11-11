import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { isVisible: false, notification: null };

const CartStore = createSlice({
  name: "Cart",
  initialState: initialCartState,
  reducers: {
    toggleVisibility(state) {
      state.isVisible = !state.isVisible;
    },
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const cartActions = CartStore.actions;
export default CartStore;
