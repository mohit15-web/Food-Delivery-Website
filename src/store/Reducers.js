import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state = initialState, action) => {
      state.cartItems.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    REMOVE_FORM_CART: (state = initialState, action) => {
      state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    MAKE_CART_EMPTY: (state = initialState) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { ADD_TO_CART , REMOVE_FORM_CART , MAKE_CART_EMPTY } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
