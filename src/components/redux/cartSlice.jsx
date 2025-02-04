import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
    
  },
});

export default cartSlice.reducer;
export const { setProducts } = cartSlice.actions;
