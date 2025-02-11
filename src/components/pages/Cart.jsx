import { useSelector } from "react-redux";
import EmptyCart from "../../assets/Images-main/Images-main/Mis_Images/emptycart.png";
import "./Cart.css";
import FooterCard from "../footer/Footer";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Modal from "../modal/Modal";
import ChangeAddress from "../changeAdress/ChangeAdress"; // Fixed incorrect import

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("Andhra Pradesh, 50043");
  const [isModelOpen, setIsModelOpen] = useState(false);

  console.log("Cart State:", cart);

  return (
    <div>
      <div className="cart-container">
        {cart?.productsCart?.length > 0 ? (
          <div>
            <h3 className="cart-title">Shopping Cart</h3>
            <div>
              <div className="cart-table">
                <div className="cart-header">
                  <p>Product</p>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Subtotal</p>
                  <p>Remove</p>
                </div>
                <div>
                  {cart.productsCart.map((product, index) => (
                    <div key={index} className="cart-item">
                      <div className="cart-item-details">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                      </div>
                      <p className="cart-price">${product.price}</p>
                      <div className="cart-quantity">
                        <button>-</button>
                        <p>{product.quantity}</p>
                        <button>+</button>
                      </div>
                      <p className="cart-subtotal">
                        ${(product.quantity * product.price).toFixed(2)}
                      </p>
                      <button className="cart-remove">
                        <FaTrashAlt />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="cart-total-container">
                  <h3>Cart Totals</h3>

                  <div className="cart-total-item">
                    <span>Total Items:</span>
                    <span>{cart.totalQuantity}</span>
                  </div>

                  <div className="cart-shipping">
                    <p>Shipping:</p>
                    <p>Shipping to <span>{address}</span></p>
                    <button className="change-address" onClick={() => setIsModelOpen(true)}>
                      Change Address
                    </button>
                  </div>

                  <div className="cart-total-price">
                    <span>Total Price:</span>
                    <span>${cart.totalPrice.toFixed(2)}</span>
                  </div>

                  <button className="checkout-btn">Proceed to Checkout</button>
                </div>
              </div>
            </div>

            {/* Corrected Modal Usage */}
            {isModelOpen && (
              <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
                <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen} />
              </Modal>
            )}
          </div>
        ) : (
          <div className="empty-cart">
            <img src={EmptyCart} alt="Empty Cart" />
          </div>
        )}
      </div>
      <FooterCard />
    </div>
  );
};

export default Cart;
