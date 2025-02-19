import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice"; // Make sure this path is correct

const ProductDetail = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.productsCart);
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

  if (!product) return <div>Product not found or loading...</div>;

  return (
    <div>
      <div>
        <div>
          <div>
            <img src={product.image} alt={product.name} />
          </div>
          <div>
            <h2>{product.name}</h2>
          </div>
          <div>${product.price}</div>
          <div>
            <input 
              type="number" 
              id="quantity" 
              min="1" 
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>
          <button onClick={handleAddToCart}>Add to cart</button>
        </div>
        <div>
          <p>Delivery & Return</p>
          <p>Ask a Question</p>
        </div>
      </div>

      <div>
        <h3>Product Description</h3>
        <p>Product description will goes here.</p>
      </div>
    </div>
  );
};

export default ProductDetail;