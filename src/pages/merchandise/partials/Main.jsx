import React, { useState } from "react";
import { merchandise } from "../../../data/merchandise";
import ProductContainer from "./ProductContainer";
import DetailsProduct from "./DetailsProduct";
import ShowModal from "@components/modal/";

const OurMerchandise = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="text-white min-h-screen flex flex-col justify-center items-center gap-10 py-20">
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
      <ShowModal isVisible={showModal} setIsVisible={setShowModal}>
        <DetailsProduct />
      </ShowModal>
    </div>
  );
};

export default OurMerchandise;
