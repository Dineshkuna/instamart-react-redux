import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types"; 
import "./ProductCard.css";
import { addToCart } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";



const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product));
    alert("Product Added Sucessfully")
    

  }
  return (
    // eslint-disable-next-line react/prop-types
    <Link to = {`/product/${product.id}`}>
    <div className="product-main">
      <div className="product-list"> 
        <div className="product-card">
          <div className="card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <FaStar className="star-icon" key={index} />
              ))}
            </div>
            <div className="add-to-cart" onClick={(e)=>handleAddToCart(e, product)}>
              <span className="cart-icon">+</span>
              <span className="cart-text">Add to cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

// Add PropTypes validation
ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default ProductCard;
