// import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import AboutImg from '../../assets/Images-main/Images-main/Mis_Images/WhatsApp Image 2023-02-28 at 21.46.05.jpg';
import FooterCard from "../footer/Footer";

const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 bg-[#f7f7f7]">
        <div className="flex flex-col md:flex-row items-center bg-white p-5 rounded-lg shadow-lg max-w-4xl w-full">
          {/* Image Section */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
            <img src={AboutImg} alt="About" className="w-full h-full object-cover" />
            <div className="absolute bottom-2 right-2 bg-[#3498db] text-white p-3 rounded-full flex items-center justify-center">
              <FaPhoneAlt className="text-xl" />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex-1 mt-6 md:mt-0 md:ml-6">
            <h2 className="text-2xl font-bold">About Us</h2>
            <h4 className="text-lg font-semibold mt-2">Sample Headline</h4>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Article evident arrived express highest men did boy. Mistress
              sensible entirely am so. Quick can manor smart money hopes worth
              too. Comfort produce husband boy her had hearing. Law others theirs
              passed but wishes. You day real less till dear read.
            </p>
          </div>
        </div>

        {/* Additional Text */}
        <div className="mt-6 bg-white p-5 rounded-lg shadow-lg max-w-4xl w-full">
          <p className="text-sm text-gray-600 leading-relaxed">
            He an thing rapid these after going drawn or. Timed she his law the
            spoil round defer. In surprise concerns informed betrayed he learning
            is ye. Ignorant formerly so ye blessing. He as spoke avoid given
            downs money on we.
          </p>
        </div>
      </div>
      <FooterCard />
    </div>
  );
};

export default AboutUs;

