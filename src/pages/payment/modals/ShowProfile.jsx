import React from "react";
import { useNavigate } from "react-router-dom";

const ShowProfile = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  const nav = useNavigate();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-black rounded-lg shadow-lg max-w-lg w-full mx-4 p-6 md:mx-0 md:p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold">
            Complete Your Profile
          </h2>
        </div>
        <p className="text-sm md:text-base mb-6">
          It looks like your phone number is missing. Please complete your
          profile by adding your phone number to continue.
        </p>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-150"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              nav("/dashboard");
            }}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-150"
          >
            Complete Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowProfile;
