import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  productsCart: [],
  totalQuantity : 0,
  totalPrice: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.productsCart.find((item) =>item.id === newItem.id);
      if(itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice += newItem.price
      } else {
        state.productsCart.push({
          id : newItem.id,
          name : newItem.name,
          price : newItem.price,
          quantity : 1,
          totalPrice : newItem.price,
          image : newItem.image

        })
          

        
      }
      state.totalPrice += newItem.price
      state.totalQuantity ++;
    }
    
    
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
