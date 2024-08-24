import React from "react";
import Banner from "../../../assets/images/bannerHomepage.jpg";

const Heading = () => {
  const Backdrop = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="min-h-screen bg-black flex flex-col justify-center"
      style={Backdrop}
    >
      <div className="w-[90%] mx-auto space-y-5">
        <div className="text-red-700">
          <h1 className="text-h1 font-bold">
            TEDx{" "}
            <span className="text-white">
              Sebelas Maret <br /> University
            </span>
          </h1>
        </div>
        <div>
          <h2 className="text-h5 text-white">The Education of the Future</h2>
        </div>
        <div className="pt-5">
          <button className="text-white bg-red-700 px-4 py-2 rounded-xl hover:bg-red-800">
            See u at The Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
