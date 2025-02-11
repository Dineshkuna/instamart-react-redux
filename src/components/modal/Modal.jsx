import PropTypes from "prop-types";
import './Modal.css'

const Modal = ({ isModelOpen, setIsModelOpen, children }) => {
  if (!isModelOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={() => setIsModelOpen(false)}>
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
