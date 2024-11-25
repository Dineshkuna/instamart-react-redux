import data from "../../assets/categorydata";
import heroImg from "../../assets/Images-main/Images-main/hero-page.png";
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
              <p> <span><IoIosRadioButtonOff /></span> {item}</p>
            </div>
          );
        })}
        </div>
      </div>
      <div>
        <img src={heroImg} alt="heroImg" />
        <div>
          <p>Dinesh | e-shop</p>
          <p>WELCOM TO E-SHOP</p>
          <p>Million + Products</p>
          <button>Shop Now</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HeroSlide;
