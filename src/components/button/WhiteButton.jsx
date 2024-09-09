import React from "react";

const WhiteButton = ({ children, onClick }) => {
  return (
    <button
      className="text-black bg-[#f5f5f5] px-4 py-2 rounded-xl hover:bg-red-800"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default WhiteButton;
