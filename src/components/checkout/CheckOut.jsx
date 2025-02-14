import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import FooterCard from "../footer/Footer";
import "./CheckOut.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(true);
  const [paymentToggle, setPaymentToggle] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <div className="cart-container">
        <h3 className="cart-title">CHECKOUT </h3>
        <div className="billing-section">
          <div
            className="billing-header"
            onClick={() => setBillingToggle(!billingToggle)}
          >
            <p>Billing Information</p>
            {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
          </div>
          <br />
          <form>
            <div className={billingToggle ? "visible" : "hidden"}>
              <label>Name</label>
              <input
                className="inputCheckout"
                type="text"
                placeholder="Enter Name"
              />

              <label>Email</label>
              <input
                className="inputCheckout"
                type="email"
                placeholder="Enter Email"
              />

              <label>Phone</label>
              <input
                className="inputCheckout"
                type="text"
                placeholder="Enter Phone #"
              />
            </div>
          </form>
        </div>
      </div>

      {/* shipping_section */}
      <div className="cart-container">
        <div className="billing-section">
          <div
            className="billing-header"
            onClick={() => setShippingToggle(!shippingToggle)}
          >
            <p>Shipping Information</p>
            {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
          </div>
          <br />
          <form>
            <div className={shippingToggle ? "visible" : "hidden"}>
              <label>Address</label>
              <input
                className="inputCheckout"
                type="text"
                placeholder="Enter Address"
              />

              <label>City</label>
              <input
                className="inputCheckout"
                type="email"
                placeholder="Enter City"
              />

              <label>Zip Code</label>
              <input
                className="inputCheckout"
                type="text"
                placeholder="Enter Zip Code"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Payment method */}

      <div className="cart-container">
        <div className="billing-section">
          <div
            className="billing-header"
            onClick={() => setPaymentToggle(!paymentToggle)}
          >
            <p>Payment Method</p>
            {paymentToggle ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          <br />
          <form>
            <div className={paymentToggle ? "visible" : "hidden"}>
              <label>
                <input
                  className="inputCheckoutRadio"
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                Cash on Delivery
              </label>
              <br />
              <br />
              <label>
                <input
                  className="inputCheckoutRadio"
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                Debit Card
              </label>
              <br />
            </div>
            {paymentMethod === "dc" && (
              <div className="debit-card-info">
                <h3>Debit Card Information</h3>
                <div>
                  <label htmlFor="">Card Number</label>
                  <input type="text" placeholder="Enter card number" />
                </div>
                <div>
                  <label htmlFor="">Card Holder Name</label>
                  <input type="text" placeholder="Enter card holder name" />
                </div>
                <div>
                  <label htmlFor="">Expiry Date</label>
                  <input type="text" placeholder="MM/YY" />
                </div>
                <div>
                  <label htmlFor="">CVV</label>
                  <input type="text" placeholder="CVV" />
                </div>
              </div>
            )}
          </form>
        </div>
      </div>

      <div>
        
        <div className="order-summary">
        <h3>Order Summary</h3>
          {cart.productsCart.map((product) => (
            <div key={product.id} className="order-item">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <h4>{product.name}</h4>
                <p>
                  ${product.price} x {product.quantity}
                </p>
              </div>
            </div>
          ))}

          <div className="total-price">
            <span>Total Price:</span>
            <span>${cart.totalPrice.toFixed(2)}</span>
          </div>
          <button className="place-order-btn">Place Order</button>
        </div>
      </div>

      <FooterCard />
    </div>
  );
};

export default CheckOut;
