// import React from 'react'

import { useSelector } from "react-redux"
import ProductCard from "../productCard.jsx/ProductCard";

const FilterData = () => {
    const filterProducts = useSelector(state => state.productsCart?.filteredData);
  return (
    <div>
    <h2 style={{ textAlign: "center" }}>Shop</h2>

    <div>
      {Array.isArray(filterProducts) &&
        filterProducts
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </div>
    
  </div>
  )
}

export default FilterData
