import React from "react";
import InputText from "@components/input/inputText";
import RedButton from "@components/button/RedButton";

const DetailsProduct = () => {
  return (
    <div className="h-[80vh] w-[80vw] flex border-2 border-red-700 rounded-3xl p-5 gap-5 bg-black">
      <div className="bg-white p-5 rounded-3xl flex items-center justify-center w-[40%]">
        <img
          src="https://i.ibb.co.com/w4wS4vv/ted-logo-3704-A5-CF1-F-seeklogo-com.png"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center space-y-5 w-[60%]">
        <div className="space-y-5">
          <h3 className="text-h3 font-bold">T-Shirt TEDx Special Edition</h3>
          <p className="text-[#bfbfbf]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            illum quisquam? Repudiandae tempora totam dolore, corporis beatae
            obcaecati hic eligendi fugiat harum ullam deserunt voluptate?
          </p>
          <h3 className="text-h4 font-bold">Rp. 100.000,-</h3>
        </div>
        <div className="flex space-x-5">
          <div className="w-full space-y-3">
            <InputText>Quantity</InputText>
            <InputText>Note</InputText>
          </div>
          <RedButton>Add To Cart</RedButton>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
