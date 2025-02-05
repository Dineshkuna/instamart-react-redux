import GenCategory from "../genderCategory/GenderCategory";
import Info from "../infoData/info";
import HeroSlide from "../main/heroslide";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux"; //
import { useEffect } from "react";
import ProductCard from "../productCard.jsx/ProductCard";
import mockData from "../../assets/Images-main/Images-main/mockData";
import Shop from "./Shop";
import FooterCard from "../footer/Footer";


const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products || []);

  console.log("Products:", products); // Debugging

  useEffect(()=> {
    dispatch(setProducts(mockData));
  },[dispatch]);

  return (
    <div>
      <HeroSlide />
      <Info />
      <GenCategory />

      <div className="container mx-auto py-12">
        <h2
          className="text-2xl font-bold mb-6 text-center"
          style={{ textAlign: "center" }}
        >
          Top Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cole-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {Array.isArray(products) &&
            products
              .slice(0, 5)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </div>

      <Shop />  
      <FooterCard/> 
      
    </div>
  );
};

export default Home;
