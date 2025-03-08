import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterCard = () => {
  return (
    <footer className="bg-[#131921] text-white p-10 flex flex-col md:flex-row justify-between items-start flex-wrap gap-8">
      {/* About Section */}
      <div className="flex-1 min-w-[200px]">
        <p className="text-lg font-bold mb-4">e-Shop</p>
        <p className="text-sm">
          Your one-step for all your needs. Shop with us and experience the best
          online shopping experience.
        </p>
      </div>

      {/* Quick Links Section */}
      <div className="flex-1 min-w-[200px]">
        <p className="text-lg font-bold mb-4">Quick Links</p>
        <ul className="list-none p-0">
          <li className="mb-2">
            <Link to="/" className="text-white hover:text-[#f05454] transition-colors duration-300">
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/shop" className="text-white hover:text-[#f05454] transition-colors duration-300">
              Shop
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/contact" className="text-white hover:text-[#f05454] transition-colors duration-300">
              Contact
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/about" className="text-white hover:text-[#f05454] transition-colors duration-300">
              About
            </Link>
          </li>
        </ul>
      </div>

      {/* Follow Us Section */}
      <div className="flex-1 min-w-[200px]">
        <p className="text-lg font-bold mb-4">Follow Us</p>
        <div className="flex gap-4 mb-4">
          <a href="#" className="text-white hover:text-[#f05454] transition-colors duration-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-[#f05454] transition-colors duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-[#f05454] transition-colors duration-300">
            <FaGithub size={24} />
          </a>
          <a href="#" className="text-white hover:text-[#f05454] transition-colors duration-300">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Email Subscription */}
        <div className="flex flex-col lg:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter Email"
            className="p-2 rounded-lg border border-gray-300 focus:border-[#f05454] focus:outline-none w-full lg:w-48"
          />
          <button className="bg-[#d62d20] text-white p-2 rounded-lg hover:bg-[#ff3b30] transition-colors duration-300 w-full lg:w-auto">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full text-center border-t border-white/10 pt-4 mt-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} e-Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterCard;
