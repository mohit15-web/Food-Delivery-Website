import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      console.log(itemIndex);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    REMOVE_FROM_CART: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    MAKE_CART_EMPTY: (state) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    DECREASE_QUANTITY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      console.log(itemIndex);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity -= 1;
        state.cartItems = state.cartItems.filter((x) => x.quantity > 0);
      }
      
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { ADD_TO_CART, REMOVE_FROM_CART, MAKE_CART_EMPTY , DECREASE_QUANTITY} = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
