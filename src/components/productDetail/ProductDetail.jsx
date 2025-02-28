import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
import "./ProductDetail.css";
import FooterCard from "../footer/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products && products.length > 0) {
      const newProduct = products.find((product) => product.id === parseInt(id));
      setProduct(newProduct || null);
    }
  }, [id, products]);

  const handleAddToCart = () => {
    if (product) {
      const productWithQuantity = { ...product, quantity };
      dispatch(addToCart(productWithQuantity));
      alert("Product Added Successfully");
    }
  };

  if (!product) return <div className="loading-text">Product not found or loading...</div>;

  return (
    <div className="product-container">
      <div className="product-wrapper">
        {/* Product Image Section */}
        <div className="product-image-img">
          <img src={product.image} alt={product.name} />
        </div>

        {/* Product Details Section */}
        <div className="product-details">
          <h2 className="product-title">{product.name}</h2>
          <p className="product-price">${product.price}</p>

          {/* Quantity Input */}
          <div className="quantity-section">
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="quantity-input"
            />
          </div>

          {/* Add to Cart Button */}
          <button onClick={handleAddToCart} className="add-to-cart-btn">
            Add to Cart
          </button>

          {/* Extra Information */}
          <div className="extra-info">
            <p className="info-item">🚚 Delivery & Return</p>
            <p className="info-item">❓ Ask a Question</p>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="product-description">
        <h3>Product Description</h3>
        <p>Product description will go here.</p>
      </div>
      <br />
      <br />
      <FooterCard/>
    </div>
  );
};

export default ProductDetail;


