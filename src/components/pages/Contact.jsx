// import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import "./Contact.css"; // Import the external CSS file
import FooterCard from "../footer/Footer";

const ContactCard = () => {
  return (
    <div>
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-info">
          {/* Address */}
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>India, Hyderabad, PinCode 532345</p>
          </div>

          {/* Phone */}
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <p>+91 8019555222</p>
          </div>

          {/* Email */}
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>kunadinesh.work@gmail.com</p>
          </div>

          {/* Website */}
          <div className="contact-item">
            <FaGlobe className="contact-icon" />
            <p>https://github.com/Dineshkuna/instamart-react-redux</p>
          </div>
        </div>
      </div>
      
    </div>
    
      <FooterCard/>
    </div>
  );
};

export default ContactCard;
