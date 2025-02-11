import { useState } from "react";

const ChangeAddress = ({ setAddress, setIsModelOpen }) => {
  const [newAddress, setNewAddress] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter new address"
          className="input-field"
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
        />
        <div className="button-container">
          <button className="cancel-button" onClick={() => setIsModelOpen(false)}>
            Cancel
          </button>
          <button className="save-button" onClick={() => {
            if (newAddress.trim() !== "") {
              setAddress(newAddress);
              setIsModelOpen(false);
            }
          }}>
            Save Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeAddress;
