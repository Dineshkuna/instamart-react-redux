import GenCategory from "../genderCategory/GenderCategory";
import Info from '../../../src/components/infoData/Info.jsx'
import HeroSlide from "../main/heroslide";
import { setProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux"; //
import { useEffect } from "react";
import ProductCard from "../productCard.jsx/ProductCard";
import mockData from "../../assets/Images-main/Images-main/mockData";
import Shop from "./Shop";


const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products || []);

  console.log("Products:", products); 

  useEffect(() => {
    dispatch(setProducts(mockData));
  }, [dispatch]);

  return (
    <div>
      <HeroSlide />
      <Info />
      <GenCategory />

      <div >
        <h2
          
          style={{ textAlign: "center" }}
        >
          <b className=" text-xl">Top Products</b>
        </h2>

        <div className="flex flex-wrap justify-center">
          {Array.isArray(products) &&
            products
              .slice(0, 6)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </div>

      <Shop />
      
    </div>
  );
};

export default Home;




