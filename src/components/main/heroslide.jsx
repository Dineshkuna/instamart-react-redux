

import data from "../../assets/categorydata";
import heroImg from "../../assets/Images-main/Images-main/Mis_Images/hero-page.png";
import { IoIosRadioButtonOff } from "react-icons/io";

const HeroSlide = () => {
  return (
    <div className="flex flex-col lg:flex-row pt-8 gap-6 px-4 sm:px-6 lg:px-20">
      {/* Category Bar */}
      <div className="w-full lg:w-1/4">
        <p className="p-2 pl-2 pr-20 bg-red-600 font-bold text-white mb-0">
          SHOP BY CATEGORIES
        </p>
        <div className="bg-amber-200 p-4 cursor-pointer">
          
          {data.map((item, index) => (
            
            <div key={index} className="flex items-center space-x-2 py-2">
              
              <IoIosRadioButtonOff className="text-red-600" />
              
              <p>{item}</p>
              
            </div>
          ))}
        </div>
      </div>

      {/* Hero Image and Text */}
      <div className="w-full lg:w-3/4 relative">
        <img
          className="w-full h-[25rem]"
          src={heroImg}
          alt="heroImg"
        />
        <div className="absolute top-1/3 left-4 transform -translate-x-0 -translate-y-1/2 text-start">
          <p className="text-white-300 text-lg italic">Dinesh | e-shop</p>
          <p className="text-2xl font-bold mt-2 text-white">WELCOME TO E-SHOP</p>
          <p className="text-xl font-bold mt-2 text-white">Million + Products</p>
          <button className="bg-red-600 px-6 py-2 text-white cursor-pointer mt-4 hover:bg-red-700">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;

