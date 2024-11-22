import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="totalNavbar">
      <div className="main_navbar">
        <div className="eshop">
          <Link className="eshop1"  to="/">e-Shop</Link>
        </div>
        <div className="form">
          <form>
            <input className="searchbar" type="text" placeholder="Search" />
            <div className="searchicon">
            <FaSearch></FaSearch>
            </div>
          </form>
        </div>
        <div className="carticon" >
          <FaCartShopping></FaCartShopping>
        </div>
        <div className="loginRegister">
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
    </div>
  );
};
export default Navbar;
