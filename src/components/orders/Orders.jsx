/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const Orders = ({ order }) => {
  const navigate = useNavigate();

  if (!order) {
    return <p className="text-center text-gray-600">Loading order details....</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Order Confirmation Message */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Thank you for your order!</h2>
        <p className="text-gray-600">
          Your order has been placed successfully. You will receive an email confirmation shortly.
        </p>
      </div>

      {/* Order Summary */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-6 w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Order Summary</h3>
        <p className="text-gray-700">Order Number: {order.orderNumber}</p>

        {/* Shipping Information */}
        <div className="mt-4">
          <h2 className="text-lg font-bold mb-2">Shipping Information</h2>
          <p className="text-gray-700">{order.shippingInformation?.address}</p>
          <p className="text-gray-700">
            {order.shippingInformation?.city}, {order.shippingInformation?.zip}
          </p>
        </div>

        {/* Items Ordered */}
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Items Ordered</h3>
          {order.productsCart && order.productsCart.length > 0 ? (
            order.productsCart.map((product, index) => (
              <div key={index} className="flex justify-between mb-2">
                <p className="text-gray-700">
                  {product.name} (x{product.quantity})
                </p>
                <p className="text-gray-700">${product.price}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No products in this order.</p>
          )}
        </div>

        {/* Total Price */}
        <div className="flex justify-between items-center mt-6">
          <span className="text-lg font-bold">Total Price:</span>
          <span className="text-xl font-bold text-red-600">${order.totalPrice.toFixed(2)}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Track Order
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-300"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Orders;