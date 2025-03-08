import GenderCategory from "../../assets/GenderCategoryData";

const GenCategory = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-6 sm:flex-row sm:justify-around sm:gap-8 sm:p-8 md:gap-10 md:p-10 lg:gap-12 lg:p-12">
      {GenderCategory.map((categoryItem, index) => (
        <div key={index} className="relative w-full sm:w-96">
          <div className="group">
            <img
              className="w-full rounded-lg transition-transform duration-300 ease-in-out group-hover:transform group-hover:-translate-y-2 group-hover:scale-105 group-hover:shadow-lg"
              src={categoryItem.imageUrl}
              alt="categoryImage"
            />
          </div>
          <div className="absolute top-16 left-12">
            <p className="font-bold text-lg">{categoryItem.title}</p>
            <p className="text-yellow-600 font-medium cursor-pointer">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GenCategory;
