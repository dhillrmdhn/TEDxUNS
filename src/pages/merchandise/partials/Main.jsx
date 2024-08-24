import React from "react";
import RedButton from "@components/button/RedButton";
import { useNavigate } from "react-router-dom";
import { merchandise } from "../../../data/merchandise";

const OurMerchandise = () => {
  return (
    <div className="text-white bg-black min-h-screen flex flex-col justify-center items-center gap-10 py-20">
      <h3 className="text-h3 font-bold">
        Our <span className="text-red-700">Merchandise</span>
      </h3>
      <div className="w-[90%] space-y-5">
        {merchandise.map((merch) => (
          <ProductContainer
            key={merch.id}
            img={merch.imgSrc}
            children={merch.name}
            description={merch.description}
            price={merch.price}
            details={"/merchandise/" + merch.id}
          />
        ))}
      </div>
    </div>
  );
};

const ProductContainer = ({ children, img, description, price, details }) => {
  const navigate = useNavigate();
  return (
    <div className="flex space-x-5 border-2 border-red-700 p-5 rounded-3xl">
      <div className="bg-white p-5 rounded-3xl w-[200px]">
        <img src={img} alt={children} />
      </div>
      <div className="flex flex-col justify-between">
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

export default OurMerchandise;
