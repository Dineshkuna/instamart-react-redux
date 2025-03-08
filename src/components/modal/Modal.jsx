import PropTypes from "prop-types";

const Modal = ({ isModelOpen, setIsModelOpen, children }) => {
  if (!isModelOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-1000">
      <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3 p-8 rounded-lg shadow-lg relative animate-fadeIn">
        <button
          className="absolute top-3 right-3 bg-transparent border-none text-2xl cursor-pointer text-gray-700 hover:text-red-500"
          onClick={() => setIsModelOpen(false)}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isModelOpen: PropTypes.bool.isRequired,
  setIsModelOpen: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
