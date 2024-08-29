import React from "react";
import { useNavigate } from "react-router-dom";
import RedButton from "@components/button/RedButton";

const ProductContainer = ({ children, img, description, price, details }) => {
  const navigate = useNavigate();
  return (
    <div className="flex space-x-5 border-2 border-red-700 p-5 rounded-3xl">
      <div className="bg-white p-5 rounded-3xl w-[200px]">
        <img src={img} alt={children} />
      </div>
      <div className="flex flex-col justify-between w-full">
        <div className="space-y-2">
          <h4 className="text-h4 font-bold">{children}</h4>
          <p className="text-[#bfbfbf]">{description}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex space-x-3 items-center text-[20px] font-bold">
            <p>Price:</p>
            <p>{price},-</p>
          </div>
          <div>
            <RedButton onClick={() => navigate(details)}>
              <p>View Details</p>
            </RedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
