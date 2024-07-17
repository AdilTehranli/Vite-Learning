import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./slices/AppSlice";
import ProductSlice from "./slices/ProductSlice";
import BasketSlice from "./slices/BasketSlice";

export const store = configureStore({
  reducer: {
    app: AppSlice,
    product: ProductSlice,
    basket: BasketSlice,
  },
});
