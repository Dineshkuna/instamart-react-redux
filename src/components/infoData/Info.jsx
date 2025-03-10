
import infoitem from '../../assets/InfoItems';

const Info = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 sm:gap-8 sm:p-8 lg:gap-10 lg:p-10">
      {infoitem.map((infoItem, index) => (
        <div
          key={index}
          className="w-64 h-auto text-center p-6 shadow-md transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:scale-105 hover:shadow-lg"
        >
          {/* Centered Icon */}
          <div className="flex justify-center">
            
            <p className="text-red-500 text-3xl">{infoItem.icon}</p>
            
          </div>
          <p className="text-xl font-bold mt-4">{infoItem.title}</p>
          <p className="text-gray-600 font-light mt-2">{infoItem.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Info;

