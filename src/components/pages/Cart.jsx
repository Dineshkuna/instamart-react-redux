import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../../assets/Images-main/Images-main/Mis_Images/emptycart.png";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Modal from "../modal/Modal";
import ChangeAddress from "../changeAdress/ChangeAdress"; // Fixed incorrect import
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import FooterCard from "../footer/Footer";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("Andhra Pradesh, 50043");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("Cart State:", cart);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-9xl p-5 bg-white rounded-lg shadow-md">
        {cart?.productsCart?.length > 0 ? (
          <div>
            <h3 className="text-2xl font-bold mb-5">Shopping Cart</h3>
            <div className="overflow-x-auto">
              <div className="min-w-full">
                <div className="flex justify-between border-b-2 border-gray-200 py-2 font-bold">
                  <p className="flex-1 text-center">Product</p>
                  <p className="flex-1 text-center">Price</p>
                  <p className="flex-1 text-center">Quantity</p>
                  <p className="flex-1 text-center">Subtotal</p>
                  <p className="flex-1 text-center">Remove</p>
                </div>
                {cart.productsCart.map((product, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-200 py-4">
                    <div className="flex items-center flex-1">
                      <img src={product.image} alt={product.name} className="w-20 h-auto rounded-lg" />
                      <h3 className="ml-4 text-lg">{product.name}</h3>
                    </div>
                    <p className="flex-1 text-center font-bold">${product.price}</p>
                    <div className="flex items-center justify-center flex-1">
                      <button onClick={() => dispatch(decreaseQuantity(product.id))} className="bg-gray-200 px-3 py-1 rounded-lg">-</button>
                      <p className="mx-3 font-bold">{product.quantity}</p>
                      <button onClick={() => dispatch(increaseQuantity(product.id))} className="bg-gray-200 px-3 py-1 rounded-lg">+</button>
                    </div>
                    <p className="flex-1 text-center font-bold">${(product.quantity * product.price).toFixed(2)}</p>
                    <button onClick={() => dispatch(removeFromCart(product.id))} className="flex-1 text-center text-red-500">
                      <FaTrashAlt />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold border-b border-gray-200 pb-3">Cart Totals</h3>
              <div className="mt-4">
                <div className="flex justify-between mb-3">
                  <span>Total Items:</span>
                  <span className="font-bold">{cart.totalQuantity}</span>
                </div>
                <div className="mb-3">
                  <p>Shipping:</p>
                  <p>Shipping to <span className="font-bold">{address}</span></p>
                  <button onClick={() => setIsModelOpen(true)} className="text-blue-500 underline">Change Address</button>
                </div>
                <div className="flex justify-between mt-4 font-bold">
                  <span>Total Price:</span>
                  <span>${cart.totalPrice.toFixed(2)}</span>
                </div>
                <button onClick={() => navigate('/checkout')} className="w-full bg-red-500 text-white py-2 rounded-lg mt-4 hover:bg-red-600">
                  Proceed to Checkout
                </button>
              </div>
            </div>
            {isModelOpen && (
              <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
                <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen} />
              </Modal>
            )}
          </div>
        ) : (
          <div className="flex justify-center">
            <img src={EmptyCart} alt="Empty Cart" className="w-1/2" />
          </div>
        )}
      </div>
      <FooterCard />
    </div>
  );
};

export default Cart;
