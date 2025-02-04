import GenCategory from "../genderCategory/GenderCategory";
import Info from "../infoData/info";
import HeroSlide from "../main/heroslide";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductCard from "../productCard.jsx/ProductCard";
import mockData from "../../assets/Images-main/Images-main/mockData";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products || []);

  console.log("Products:", products); // Debugging

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  return (
    <div>
      <HeroSlide />
      <Info />
      <GenCategory />

      <div>
        <h2>Top Products</h2>

        <div>
          {Array.isArray(products) &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
