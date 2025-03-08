import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import './ProductCard.css'



const ProductCard = ({ product }) => {

 
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
    alert("Product Added Successfully");
  };

  return (
    // eslint-disable-next-line react/prop-types
    <Link to={`/product/${product.id}`}>
      <div className="inline-flex">
        {/* Flex container with wrapping */}
        <div className="flex flex-wrap justify-center gap-5 p-5">
          <div className="flex justify-center items-center">
            <div className="w-52 h-[350px] bg-white p-4 shadow-md rounded-lg relative border border-gray-300 transition-transform duration-300 ease-in-out flex flex-col items-center hover:transform hover:scale-105 ">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-36 object-contain mb-3"
              />
              <h3 className="text-lg font-semibold text-center">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.price}</p>
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar className="text-yellow-400 text-base" key={index} />
                ))}
              </div>
              <div
                className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 text-white text-sm rounded-full cursor-pointer transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap hover:w-24 hover:rounded-xl hover:bg-red-700"
                onClick={(e) => handleAddToCart(e, product)}
              >
                <span className="block">+</span>
                <span className="hidden hover:block ml-2">Add to cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default ProductCard;
