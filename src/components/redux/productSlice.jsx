import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, actions) {
      state.products = actions.payload;
    },
  },
});

export default productSlice.reducer;
export const { setProducts } = productSlice.actions;
