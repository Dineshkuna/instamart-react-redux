import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const FooterCard = () => {
  return (
    <div>
      <footer>
        <div>
          <p>e-Shop</p>
          <p>
            Your one-step for all your needs. Shop with use and experience the
            best online shopping experience
          </p>
        </div>
        <div>
          <p>Quick Links</p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li></li>
          </ul>
        </div>
        <div>
          <p>Follow us</p>
          <p>
            <FaFacebook />
          </p>
          <p>
            <FaTwitter />
          </p>
          <p>
            <FaGithub />
          </p>
          <p>
            <FaLinkedin />
          </p>

          <input type="email" placeholder="Enter Email" />
          <button>Subscribe</button>
        </div>
      </footer>
    </div>
  );
};

export default FooterCard;
