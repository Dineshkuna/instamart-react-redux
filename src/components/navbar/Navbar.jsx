
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../modal/Modal";
import Login from "../login/Login";
import SignUp from "../signUp/SignUp";
import { useState } from "react";
import { setSearchTerm } from "../redux/productSlice";

const Navbar = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    setSearch("");
    navigate("/filter-data");
  };

  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };

  const productsCart = useSelector((state) => state.cart.productsCart);

  return (
    <div>
      {/* Full-width navbar with box shadow */}
      <div className="w-full bg-white shadow-sm">
        <div className="container mx-auto px-4  sm:px-6 lg:px-8 py-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-xl font-bold text-black px-4 sm:px-8">
                e-Shop
              </Link>
              <form onSubmit={handleSearch} className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-5 pr-12 py-2 border rounded-full text-sm w-full sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[1000px] focus:outline-none"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <FaSearch className="text-brown-500" />
                </div>
              </form>
            </div>
            <div className="flex items-center space-x-6">
              <Link to="/cart" className="relative">
                <FaCartShopping className="text-2xl" />
                {productsCart.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                    {productsCart.length}
                  </span>
                )}
              </Link>
              <div
                onClick={() => setIsModelOpen(true)}
                className="cursor-pointer text-sm"
              >
                <p>Login | Register</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width navigation links section with background */}
      <div className="w-full bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-12 py-3">
            <Link to="/" className="text-black font-bold text-lg hover:text-gray-700">
              Home
            </Link>
            <Link to="/shop" className="text-black font-bold text-lg hover:text-gray-700">
              Shop
            </Link>
            <Link to="/contact" className="text-black font-bold text-lg hover:text-gray-700">
              Contact
            </Link>
            <Link to="/about" className="text-black font-bold text-lg hover:text-gray-700">
              About
            </Link>
          </div>
        </div>
      </div>

      {/* Modal for login/signup */}
      <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <SignUp openLogin={openLogin} />
        )}
      </Modal>
    </div>
  );
};

export default Navbar;
