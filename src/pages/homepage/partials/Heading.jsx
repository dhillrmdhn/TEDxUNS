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
    </div>
  );
};

export default Heading;
