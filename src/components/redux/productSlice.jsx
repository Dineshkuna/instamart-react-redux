import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsCart: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
   setProducts: (state, actions)=> {
      state.products = actions.payload;
    console.log(state.products);
    },
  },
});

export default productSlice.reducer;
export const { setProducts } = productSlice.actions;









