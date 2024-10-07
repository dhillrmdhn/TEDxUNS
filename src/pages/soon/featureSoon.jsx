import React from "react";
import Background from "../../assets/videos/RedFlareBackground.mp4";

const FeatureSoon = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white overflow-hidden relative">
      <video
        src={Background}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 text-center">
      <h4 className="text-[20px]">Something greet is on the way!</h4>
      <h1 className="text-[82px] font-bold">Launching Soon</h1>
      </div>
    </div>
  );
};

export default FeatureSoon;
