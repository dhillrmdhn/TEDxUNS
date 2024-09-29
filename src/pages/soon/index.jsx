import React from "react";
import Logo from "@icon/TEDLogoDesc.png";
import useCountdown from "../../hooks/useCountdown";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Background from "../../assets/videos/ComingsoonBackground.mp4";

const ComingSoon = () => {
  const { days, hours, minutes, seconds } = useCountdown(
    "Oct 7, 2024 23:59:59"
  );
  const formatNumber = (number) => String(number).padStart(2, "0");

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src={Background}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 flex flex-col min-h-screen w-full justify-center items-center bg-black bg-opacity-50 text-white">
        <div className="w-[90%] flex flex-col">
          <div className="flex flex-col space-y-0 md:space-y-5">
            <img
              src={Logo}
              className="w-[200px] md:w-[350px] mb-5"
              alt="Logo"
            />
            <h1 className="text-h3 md:text-[80px] font-bold">Coming Soon</h1>
            <p className="text-[20px] md:text-h4">We are working on it</p>
          </div>
          <div className="mt-10 flex font-sans text-center space-x-7">
            <div className="md:border md:p-5 rounded-xl">
              <h4 className="text-h3 md:text-h1 font-bold">
                {formatNumber(days)}
              </h4>
              <p className="text-[20px] font-thin">Days</p>
            </div>
            <div className="md:border md:p-5 rounded-xl">
              <h4 className="text-h3 md:text-h1 font-bold">
                {formatNumber(hours)}
              </h4>
              <p className="text-[20px] font-thin">Hours</p>
            </div>
            <div className="md:border md:p-5 rounded-xl">
              <h4 className="text-h3 md:text-h1 font-bold">
                {formatNumber(minutes)}
              </h4>
              <p className="text-[20px] font-thin">Minutes</p>
            </div>
            <div className="md:border md:p-5 rounded-xl">
              <h4 className="text-h3 md:text-h1 font-bold">
                {formatNumber(seconds)}
              </h4>
              <p className="text-[20px] font-thin">Seconds</p>
            </div>
          </div>
          <div>
            <div className="text-[#bfbfbf] text-[14px] md:text-[18px] mt-10">
              <p>Follow us for more insights and updates!</p>
              <div className="flex gap-5 mt-2 text-[24px]">
                <a
                  href="https://www.instagram.com/tedxuns2024/"
                  target="_blank"
                >
                  <div className="text-[#bfbfbf] text-[14px] md:text-[18px] flex border p-2 px-7 gap-3 items-center rounded-3xl hover:bg-red transition duration-300 ease-in hover:border-none">
                    <FaInstagram />
                    Instagram @tedxuns2024
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
