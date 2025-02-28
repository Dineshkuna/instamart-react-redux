import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../modal/Modal";
import Login from "../login/Login";
import SignUp from "../signUp/SignUp";
import { useState } from "react";
import { setSearchTerm } from "../redux/productSlice";
// import Cart from "../pages/Cart";



const Navbar = () => {
  const [isModelOpen , setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState()
  const dispatch = useDispatch()
  const navigate =useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(setSearchTerm(search))
    setSearch("");
    navigate('/filter-data')

  }

  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  }
  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  }
  const productsCart = useSelector(state => state.cart.productsCart)
  return (
    <div className="totalNavbar">
      <div className="main_navbar">
        <div className="eshop">
          <Link className="eshop1"  to="/">e-Shop</Link>
        </div>
        <div className="form">
          <form onSubmit={handleSearch}>
            <input className="searchbar" type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value) } />
            <div className="searchicon">
            <FaSearch></FaSearch>
            </div>
          </form>
        </div>
        <div className="carticon" >
          <Link to ='/cart'>
          <FaCartShopping/> 
          
          <span className="cartCount">
          {productsCart.length > 0 ? productsCart.length : <></>}
          </span>
          </Link>
          
        </div>
        <div className="loginRegister" 
         onClick={() => setIsModelOpen(true)}>
          <p> Login | Register </p>
        </div>
        {/* <div>
          <button>
            <FaUser></FaUser>
          </button>
        </div> */}
      </div >
      <div className="mininavbar">
      <div >
        <Link className="homebar" to="/">Home</Link>
      </div>
      <div>
        <Link className="shopbar" to="/shop">Shop</Link>
      </div>
      <div>
        <Link className="contactbar" to="/contact">Contact</Link>
      </div>
      <div>
        <Link className="aboutbar" to="/about">About</Link>
      </div>
      </div>
      <Modal isModelOpen={isModelOpen} setIsModelOpen = {setIsModelOpen}>
        {isLogin ? <Login openSignUp= {openSignUp} /> : <SignUp openLogin = {openLogin}/>}
      </Modal>
    </div>
  );
};
export default Navbar;
