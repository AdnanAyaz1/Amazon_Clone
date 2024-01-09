import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices";

const store = configureStore({
  reducer: {
    CartSlice: CartSlice.reducer,
  },
});

export default store;
