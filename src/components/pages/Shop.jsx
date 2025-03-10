// import React from 'react'

import { useSelector } from "react-redux";
import ProductCard from "../productCard.jsx/ProductCard";
import FooterCard from "../footer/Footer";

const Shop = () => {
  const products = useSelector((state) => state.products.products || []);

  return (
    
    <div>
      <br />
      <h2 style={{ textAlign: "center" }}> <b className=" text-xl">Shop</b> </h2>

      <div className="flex flex-wrap justify-center">
        {Array.isArray(products) &&
          products
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
      <br />
      <br /><br />
      <FooterCard/>
    </div>
  );
};

export default Shop;
