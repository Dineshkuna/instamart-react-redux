// import React from 'react'

import { useSelector } from "react-redux";
import ProductCard from "../productCard.jsx/ProductCard";
import FooterCard from "../footer/Footer";

const Shop = () => {
  const products = useSelector((state) => state.products.products || []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}> <b className=" text-xl">Shop</b> </h2>

      <div>
        {Array.isArray(products) &&
          products
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
      <FooterCard/>
    </div>
  );
};

export default Shop;
