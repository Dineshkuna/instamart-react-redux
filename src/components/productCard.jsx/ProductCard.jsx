import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types"; // Import PropTypes

const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <div>
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} color={index < product.rating ? "gold" : "gray"} />
        ))}
      </div>
      <button>
        <span>+</span>
        <span>Add to cart</span>
      </button>
    </div>
  );
};

// Add PropTypes validation
ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
