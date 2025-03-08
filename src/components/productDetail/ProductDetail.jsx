import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/cartSlice";
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

  if (!product)
    return <div className="text-center text-xl font-bold mt-8">Product not found or loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Product Image and Details Wrapper */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Product Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-48 h-64 rounded-lg object-cover" // Reduced image size
            />
          </div>

          {/* Product Details Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
            <p className="text-xl font-bold text-red-600 mb-4">${product.price}</p>

            {/* Quantity Input */}
            <div className="mb-6">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-20 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors duration-300"
            >
              Add to Cart
            </button>

            {/* Extra Information */}
            <div className="mt-6 space-y-2">
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <span>🚚</span> Delivery & Return
              </p>
              <p className="text-sm text-gray-600 flex items-center gap-2">
                <span>❓</span> Ask a Question
              </p>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Product Description</h3>
          <p className="text-gray-600">Product description will go here.</p>
        </div>
      </div>

      {/* Footer */}
      <FooterCard />
    </div>
  );
};

export default ProductDetail;


