// import React from 'react'

import { useSelector } from "react-redux"
import ProductCard from "../productCard.jsx/ProductCard";
import NoProduct from '../../assets/Images-main/Images-main/Mis_Images/not_found.png'


const FilterData = () => {
    const filterProducts = useSelector(state => state.products?.filteredData);
    console.log(filterProducts);
    
  return (
    <div>

{filterProducts.length > 0 ? 
<>


    <h2 style={{ textAlign: "center" }}>Shop</h2>

    <div>
      {Array.isArray(filterProducts) &&
        filterProducts
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </div>
    </>
    :
    <div >
      <img  src={NoProduct} alt="NoProducts" />
    </div>
}
    
  </div>
  )
}

export default FilterData
