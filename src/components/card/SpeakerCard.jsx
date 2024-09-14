import React from "react";

const SpeakerCard = ({ speakers, children, image, speakersName }) => {
  return (
    <div className="w-[300px] flex flex-col justify-center border-2 border-red-700 p-5 rounded-3xl text-center space-y-5 backdrop-blur cursor-pointer hover:bg-red transition duration-300">
      <div>
        <p className="text-[#bfbfbf] mb-3">{speakers}</p>
        <h5 className="text-[20px]">{children}</h5>
      </div>
      <img src={image} className="rounded-xl mx-auto" alt="" />
      <h5 className="text-[20px] font-bold">{speakersName}</h5>
    </div>
  );
};

export default SpeakerCard;
