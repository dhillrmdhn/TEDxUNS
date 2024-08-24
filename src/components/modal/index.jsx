import React from "react";

const ShowModal = ({ isVisible, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50">
      {children}
    </div>
  );
};

export default ShowModal;
