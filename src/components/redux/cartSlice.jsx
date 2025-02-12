import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsCart: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.productsCart.findIndex((item) => item.id === newItem.id);

      if (itemIndex !== -1) {
        state.productsCart[itemIndex].quantity++;
        state.productsCart[itemIndex].totalPrice += newItem.price;
      } else {
        state.productsCart.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      }
      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const findItem = state.productsCart.find((item) => item.id === id);

      if (findItem) {
        state.totalPrice -= findItem.totalPrice;
        state.totalQuantity -= findItem.quantity;
        state.productsCart = state.productsCart.filter((item) => item.id !== id);
      }
    },
    increaseQuantity(state, action){
      const id = action.payload;
      const findItem = state.productsCart.find((item) => item.id === id);
      if(findItem){
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totalQuantity ++;
        state.totalPrice += findItem.price;
      }
      

    },
    decreaseQuantity(state, action){
      const id = action.payload;
      const findItem = state.productsCart.find((item) => item.id === id);
      if(findItem.quantity >1){
      if(findItem){
        findItem.quantity--;
        findItem.totalPrice -= findItem.price;
        state.totalQuantity --;
        state.totalPrice -= findItem.price;
        
      }
    }
      

    },

  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
