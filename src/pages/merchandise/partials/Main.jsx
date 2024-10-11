import React, { useState } from "react";
import { merchandise } from "../../../data/merchandise";
import ProductContainer from "./ProductContainer";
import DetailsProduct from "./DetailsProduct";
// Icon
import { PiTShirtThin } from "react-icons/pi";
import { GiKeyring } from "react-icons/gi";
import { PiHandbagThin } from "react-icons/pi";
import { PiSmileyStickerThin } from "react-icons/pi";
import { PiCowboyHatThin } from "react-icons/pi";
import { PiPackageThin } from "react-icons/pi";

const OurMerchandise = () => {
  const [selectedProduct, setSelectedProduct] = useState(merchandise[0]);

  const handleIconClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="text-white min-h-screen flex flex-col justify-center items-center bg-black gap-10 pt-28 pb-16">
      <h1 className="text-h4 md:text-h3 font-bold text-center px-4 md:px-0">
        Our <span className="text-red">Merchandise</span>
      </h1>
      <div className="container flex flex-col items-center justify-center gap-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 w-full">
          <ProductIcons
            icon={<PiTShirtThin size={64} className="md:size-82" />}
            onClick={() => handleIconClick(merchandise[0])}
          />
          <ProductIcons
            icon={<GiKeyring size={64} className="md:size-82" />}
            onClick={() => handleIconClick(merchandise[1])}
          />
          <ProductIcons
            icon={<PiHandbagThin size={64} className="md:size-82" />}
            onClick={() => handleIconClick(merchandise[2])}
          />
          <ProductIcons
            icon={<PiSmileyStickerThin size={64} className="md:size-82" />}
            onClick={() => handleIconClick(merchandise[3])}
          />
          <ProductIcons
            icon={<PiCowboyHatThin size={64} className="md:size-82" />}
            onClick={() => handleIconClick(merchandise[4])}
          />
          <ProductIcons
            icon={<PiPackageThin size={64} className="md:size-82" />}
            onClick={() => handleIconClick(merchandise[5])}
          />
        </div>

        <div className="w-full md:w-auto">
          <ProductDetails product={selectedProduct} />
        </div>
      </div>
    </div>
  );
};

const ProductIcons = ({ icon, onClick }) => {
  return (
    <div
      className="border border-red p-4 md:p-6 rounded-xl flex items-center justify-center hover:bg-red transition duration-300 cursor-pointer"
      onClick={onClick}
    >
      {icon}
    </div>
  );
};

const ProductDetails = ({ product }) => {
  return (
    <div className="text-center md:text-left">
      <DetailsProduct product={product} />
    </div>
  );
};

export default OurMerchandise;
