import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: [],
  selectedProduct: {},
  loading: false,
};

const BASE_URL = "https://fakestoreapi.com";

export const getAllProduct = createAsyncThunk("getAllProduct", async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
});

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
  },
});

export const {} = ProductSlice.actions;

export default ProductSlice.reducer;
