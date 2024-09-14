import React from "react";
import Background from "@assets/videos/ComingsoonBackground.mp4";
import Logo from "@icon/TEDxLogo.png";

const Heading = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center">
      <video
        src={Background}
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover z-0"
      />
      <div className="relative flex flex-col min-h-screen justify-center items-center">
        <div className="text-center">
          <h1 className="text-[13rem] font-bold text-red-700 leading-none">TEDx</h1>
          <h3 className="text-h2 text-white">Sebelas Maret University</h3>
        </div>
      </div>
    </div>
  );
};

export default Heading;
