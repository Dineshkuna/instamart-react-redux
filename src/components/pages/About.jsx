// import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "./About.css"; // Import the external CSS file
import AboutImg from '../../assets/Images-main/Images-main/Mis_Images/WhatsApp Image 2023-02-28 at 21.46.05.jpg'
import FooterCard from "../footer/Footer";

const AboutUs = () => {
  return (
    <div>
    <div className="about-container">
      <div className="about-content">
        {/* Image Section */}
        <div className="about-image">
          <img src={AboutImg} alt="About" />
          <div className="phone-icon">
            <FaPhoneAlt />
          </div>
        </div>

        {/* Text Section */}
        <div className="about-text">
          <h2>About Us</h2>
          <h4>Sample Headline</h4>
          <p>
            Article evident arrived express highest men did boy. Mistress
            sensible entirely am so. Quick can manor smart money hopes worth
            too. Comfort produce husband boy her had hearing. Law others theirs
            passed but wishes. You day real less till dear read.
          </p>
        </div>
      </div>

      {/* Additional Text */}
      <div className="extra-text">
        <p>
          He an thing rapid these after going drawn or. Timed she his law the
          spoil round defer. In surprise concerns informed betrayed he learning
          is ye. Ignorant formerly so ye blessing. He as spoke avoid given
          downs money on we.
        </p>
      </div>
    </div>
    
    <FooterCard/>
    </div>
  );
};

export default AboutUs;
