import GenCategory from "../genderCategory/GenderCategory";
import Info from "../infoData/info";
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
      
     
    </div>
  );
};

export default Home;

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setProducts } from "../redux/productSlice";
// import { useNavigate } from "react-router-dom";
// import mockData from "../../assets/Images-main/Images-main/mockData";
// import GenCategory from "../genderCategory/GenderCategory";
// import Info from "../infoData/info";
// import HeroSlide from "../main/heroslide";
// import ProductCard from "../productCard.jsx/ProductCard";
// import Shop from "./Shop";

// const Home = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); 

//   const products = useSelector((state) => state.products.productsCart || []); // ✅ Fetch products from Redux

//   useEffect(() => {
//     console.log("Dispatching mock data:", mockData); // ✅ Debugging
//     dispatch(setProducts(mockData)); // ✅ Ensure products are set correctly
//   }, [dispatch]);

//   const handleProductClick = (productId) => {
//     console.log("Navigating to product:", productId); // ✅ Debugging
//     navigate(`/product/${productId}`); 
//   };

//   return (
//     <div>
//       <HeroSlide />
//       <Info />
//       <GenCategory />

//       <div className="container mx-auto py-12">
//         <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
//           {products.length === 0 ? (
//             <p className="text-center text-red-500">No Products Available</p>
//           ) : (
//             products.slice(0, 5).map((product) => (
//               <ProductCard
//                 key={product.id}
//                 product={product}
//                 onClick={() => handleProductClick(product.id)}
//               />
//             ))
//           )}
//         </div>
//       </div>

//       <Shop />
//     </div>
//   );
// };

// export default Home;

