import React from "react";

const RedButton = ({ children, onClick }) => {
  return (
    <button
      className="text-white bg-red-700 px-8 py-2 rounded-xl hover:bg-red-800"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RedButton;
