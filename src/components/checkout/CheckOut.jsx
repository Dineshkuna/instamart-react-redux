import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import FooterCard from "../footer/Footer";
import "./CheckOut.css";
import { useState } from "react";

const CheckOut = () => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(true);
  const [paymentToggle, setPaymentToggle] = useState(true);

  

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
          <br/>
          <form>
            <div className={billingToggle ? "visible" : "hidden"}>
              <label>Name</label>
              <input className="inputCheckout" type="text" placeholder="Enter Name" />

              <label>Email</label>
              <input className="inputCheckout" type="email" placeholder="Enter Email" />

              <label>Phone</label>
              <input className="inputCheckout" type="text" placeholder="Enter Phone #" />
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
          <br/>
          <form>
            <div className={shippingToggle ? "visible" : "hidden"}>
              <label>Address</label>
              <input className="inputCheckout" type="text" placeholder="Enter Address" />

              <label>City</label>
              <input className="inputCheckout" type="email" placeholder="Enter City" />

              <label>Zip Code</label>
              <input className="inputCheckout" type="text" placeholder="Enter Zip Code" />
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
            <p>Payment method</p>
            {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
          </div>
          <br/>
          <form>
            <div className={paymentToggle ? "visible" : "hidden"}>
              <input className="inputCheckout" type="radio" name = "payment"  />
              <label>Address</label>

              <label>City</label>
              <input className="inputCheckout" type="email" placeholder="Enter City" />

              <label>Zip Code</label>
              <input className="inputCheckout" type="text" placeholder="Enter Zip Code" />
            </div>
          </form>
        </div>
      </div>



      <FooterCard />
    </div>
  );
};

export default CheckOut;