import data from "../../assets/categorydata";
import heroImg from "../../assets/Images-main/Images-main/Mis_Images/hero-page.png";
import { IoIosRadioButtonOff } from "react-icons/io";
import './heroslide.css'

const HeroSlide = () => {
  return (
    <div>
      <div className="hero_slide">
      <div className="category_bar">
        <p className="category_bar_title">SHOP BY CATEGORIES</p>
        <div className="category_bar_name">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <p> <span className="radiobutton"><IoIosRadioButtonOff /></span> {item}</p>
            </div>
          );
        })}
        </div>
      </div>
      <div>
      <div className="hero_img">
        <img className="hero_img_size" src={heroImg} alt="heroImg" />
        </div>
        <div className="hero_mainheading">
          <p className="hero_heading">Dinesh | e-shop</p>
          <p className="hero_heading1">WELCOME TO E-SHOP</p>
          <p className="hero_heading2">Million + Products</p>
          <button className="hero_button">Shop Now</button>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default HeroSlide;

