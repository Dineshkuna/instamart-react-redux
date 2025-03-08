import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ChangeAddress = ({ setAddress, setIsModelOpen }) => {
  const [newAddress, setNewAddress] = useState("");

  return (
    <div className="p-4">
      <div>
        {/* Input Field */}
        <input
          type="text"
          placeholder="Enter new address"
          className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500"
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
        />

        {/* Button Container */}
        <div className="flex justify-end">
          {/* Cancel Button */}
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded-lg mr-2 hover:bg-gray-600 transition-colors duration-300"
            onClick={() => setIsModelOpen(false)}
          >
            Cancel
          </button>

          {/* Save Button */}
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            onClick={() => {
              if (newAddress.trim() !== "") {
                setAddress(newAddress);
                setIsModelOpen(false);
              }
            }}
          >
            Save Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeAddress;
