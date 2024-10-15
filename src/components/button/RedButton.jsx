import React from "react";

const RedButton = ({ children, onClick, className }) => {
  return (
    <button
      className={`text-white bg-red-700 px-8 py-2 rounded-xl font-bold hover:bg-red-800 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RedButton;
