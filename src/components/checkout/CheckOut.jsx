import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import FooterCard from "../footer/Footer";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CheckOut = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(true);
  const [paymentToggle, setPaymentToggle] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleOrder = () => {
    const newOrder = {
      productsCart: cart.products,
      orderNumber: "12344",
      shippingInformation: { ...shippingInfo },
      totalPrice: cart.totalPrice,
    };
    setOrder(newOrder);
    navigate("/order-confirmation");
    console.log(newOrder.orderNumber);
  };

  
  
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Checkout Title */}
        <h3 className="text-2xl font-bold mb-6">CHECKOUT</h3>

        {/* Billing Information Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setBillingToggle(!billingToggle)}
          >
            <p className="text-lg font-semibold">Billing Information</p>
            {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
          </div>
          <br />
          <form className={billingToggle ? "block" : "hidden"}>
            <div className="space-y-4">
              <label className="block font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />

              <label className="block font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />

              <label className="block font-medium">Phone</label>
              <input
                type="text"
                placeholder="Enter Phone #"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </form>
        </div>

        {/* Shipping Information Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setShippingToggle(!shippingToggle)}
          >
            <p className="text-lg font-semibold">Shipping Information</p>
            {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
          </div>
          <br />
          <form className={shippingToggle ? "block" : "hidden"}>
            <div className="space-y-4">
              <label className="block font-medium">Address</label>
              <input
                type="text"
                placeholder="Enter Address"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={(e) =>
                  setShippingInfo({ ...shippingInfo, address: e.target.value })
                }
              />

              <label className="block font-medium">City</label>
              <input
                type="text"
                placeholder="Enter City"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={(e) =>
                  setShippingInfo({ ...shippingInfo, city: e.target.value })
                }
              />

              <label className="block font-medium">Zip Code</label>
              <input
                type="text"
                placeholder="Enter Zip Code"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                onChange={(e) =>
                  setShippingInfo({ ...shippingInfo, zip: e.target.value })
                }
              />
            </div>
          </form>
        </div>

        {/* Payment Method Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setPaymentToggle(!paymentToggle)}
          >
            <p className="text-lg font-semibold">Payment Method</p>
            {paymentToggle ? <FaAngleUp /> : <FaAngleDown />}
          </div>
          <br />
          <form className={paymentToggle ? "block" : "hidden"}>
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                  className="mr-2"
                />
                Cash on Delivery
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                  className="mr-2"
                />
                Debit Card
              </label>
            </div>
            {paymentMethod === "dc" && (
              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-semibold">Debit Card Information</h3>
                <div>
                  <label className="block font-medium">Card Number</label>
                  <input
                    type="text"
                    placeholder="Enter card number"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-medium">Card Holder Name</label>
                  <input
                    type="text"
                    placeholder="Enter card holder name"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-medium">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-medium">CVV</label>
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          {cart.productsCart.map((product) => (
            <div key={product.id} className="flex items-center mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-20 rounded-lg mr-4"
              />
              <div>
                <h4 className="font-medium">{product.name}</h4>
                <p className="text-gray-600">
                  ${product.price} x {product.quantity}
                </p>
              </div>
            </div>
          ))}
          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total Price:</span>
            <span>${cart.totalPrice.toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      </div>

      <FooterCard />
    </div>
  );
};

export default CheckOut;
