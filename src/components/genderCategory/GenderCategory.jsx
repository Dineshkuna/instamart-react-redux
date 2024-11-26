import GenderCategory from "../../assets/GenderCategoryData";
import "./GenderCategory.css";

const GenCategory = () => {
  return (
    <div>
      <div className="categoryCard">
        {GenderCategory.map((categoryItem, index) => (
          <div key={index}>
            <div className="categoryImgGroup">
              <img className="categoryImg" src={categoryItem.imageUrl} alt="categoryImage" />
            </div>
            <div className="categoryMatter">
              <p className="categorytitle">{categoryItem.title}</p>
              <p className="categoryview">View All  </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GenCategory;
