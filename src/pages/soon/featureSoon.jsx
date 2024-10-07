import React from "react";
import Background from "../../assets/videos/RedFlareBackground.mp4";

const FeatureSoon = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white overflow-hidden relative">
      {/* Video Background */}
      <video
        src={Background}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-black/40 z-5"></div>
      <div className="relative z-10 text-center space-y-4 animate-fadeIn">
        <h4 className="text-lg md:text-2xl lg:text-3xl font-light">
          Something great is on the way!
        </h4>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-glow">
          Launching Soon
        </h1>
      </div>
    </div>
  );
};

export default FeatureSoon;
