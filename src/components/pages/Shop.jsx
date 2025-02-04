// import React from 'react'

import { useSelector } from "react-redux";
import ProductCard from "../productCard.jsx/ProductCard";

const Shop = () => {
  const products = useSelector((state) => state.products.products || []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Shop</h2>

      <div>
        {Array.isArray(products) &&
          products
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Shop;
