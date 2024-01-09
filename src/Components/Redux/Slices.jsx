import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Products: [],
  LoginInfo: null,
  TotalAmount: 0,
  NoOfProducts: 0,
};

const CartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.Products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.Products.push(action.payload);
        state.NoOfProducts += 1;
      }
      state.TotalAmount = state.Products.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      ).toFixed(0, 2);
    },

    incrementQuantity: (state, action) => {
      const item = state.Products.find((item) => item.id === action.payload.id);
      if (item.quantity > 1) {
        item.quantity += 1;
      }
      state.TotalAmount = state.Products.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      ).toFixed(2);
    },

    reduceQuantity: (state, action) => {
      const item = state.Products.find((item) => item.id === action.payload.id);
      if (item.quantity > 1) {
        item.quantity -= 1;
      }
      state.TotalAmount = state.Products.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      ).toFixed(2);
    },
    deleteItem: (state, action) => {
      state.Products = state.Products.filter(
        (item) => item.id !== action.payload.id
      );
      state.NoOfProducts -= 1;
      state.TotalAmount = state.Products.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      ).toFixed(2);
    },
    clearCart: (state) => {
      state.Products = [];
      state.NoOfProducts = 0;
      state.TotalAmount = 0;
    },

    setUser: (state, action) => {
      state.LoginInfo = action.payload;
    },

    deleteUser: (state) => {
      state.LoginInfo = null;
    },
  },
});

export default CartSlice;
export const CartFunctions = CartSlice.actions;
