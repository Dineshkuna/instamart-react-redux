import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsCart: [],
  searchTerm: '',
  filteredData: []
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
   setProducts: (state, actions)=> {
      state.products = actions.payload;
    console.log(state.products);
    },
    setSearchTerm:(state, action)=>{
      state.searchTerm = action.payload;
      state.filteredData = state.products.filter(product => product.name.toLowerCase().includes(state.searchTerm.toLowerCase()))      

    }
    
  },
  
});
export const { setProducts, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;


// 


