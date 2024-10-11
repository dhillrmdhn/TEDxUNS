import React from "react";
import Lanyard from "@images/merchandise/Lanyard.png";

const ShowLanyard = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-70">
      <div className="bg-black p-8 rounded-lg shadow-lg max-w-lg w-full space-y-20">
        <h2 className="text-xl font-bold mb-4 text-center">Lanyard Design</h2>
        <div>
          <img
            src={Lanyard}
            alt="Lanyard"
            className="w-full h-auto object-contain mb-4"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-red-700 text-white px-6 py-2 rounded-lg hover:bg-red-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowLanyard;
