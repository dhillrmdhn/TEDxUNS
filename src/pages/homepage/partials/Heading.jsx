import React from "react";
import Background from "@assets/videos/ComingsoonBackground.mp4";

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
      <div className="w-[90%] mx-auto space-y-5">
        <div
          className="text-red-700"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-h1 font-bold">
            TEDx{" "}
            <span className="text-white">
              Sebelas Maret <br /> University
            </span>
          </h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <h2 className="text-h5 text-white">The Education of the Future</h2>
        </div>
        <div className="pt-5" data-aos="fade-up" data-aos-duration="2000">
          <button className="text-white bg-red-700 px-4 py-2 rounded-xl hover:bg-red-800">
            See u at The Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
