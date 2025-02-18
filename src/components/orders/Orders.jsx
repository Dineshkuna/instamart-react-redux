/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./Order.css"; // Import the CSS file

const Orders = ({ order }) => {
  const navigate = useNavigate();

  if (!order) {
    return <p>Loading order details....</p>;
  }

  return (
    <div className="orders-container">
      <h2>Thank you for your order!</h2>
      <p>
        Your order has been placed successfully. You will receive an email confirmation shortly.
      </p>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <p>Order Number: {order.orderNumber}</p>
        <div className="shipping-info">
          <h2>Shipping Information</h2>
          <p>{order.shippingInformation?.address}</p>
          <p>{order.shippingInformation?.city}, {order.shippingInformation?.zip}</p>
        </div>
        <div className="items-ordered">
          <h3>Items Ordered</h3>
          {order.productsCart && order.productsCart.length > 0 ? (
            order.productsCart.map((product, index) => (
              <div key={index}>
                <p>
                  {product.name} (x{product.quantity})
                </p>
                <p>${product.price}</p>
              </div>
            ))
          ) : (
            <p>No products in this order.</p>
          )}
        </div>
        <div className="total-price">
          <span>Total Price:</span>
          <span>${order.totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <div className="buttons-container">
        <button>Track Order</button>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default Orders;