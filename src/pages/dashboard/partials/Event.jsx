import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Event = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white p-4">
      <div className="">
        <h3 className="text-h4 md:text-h3 font-bold">
          Detail <span className="text-red-700">Event</span>
        </h3>
      </div>
      <div className="w-full md:w-[90%]">
        <div className="mt-5 border border-red-700 p-5 md:p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center space-y-5 md:space-y-0">
          <div className="w-full space-y-6">
            <h4 className="text-h5 md:text-h4 font-bold">
              <span className="text-red-700">TEDx </span>Sebelas Maret
              University 2024: Behind the X-ynergy: Uncovering Both Sides
            </h4>
            <div className="flex space-x-5 md:flex-row">
              <div className="space-y-3 text-[#bfbfbf]">
                <p>Date</p>
                <p>Time</p>
                <p>Place</p>
              </div>
              <div className="space-y-3 ml-0 md:ml-7">
                <p>Saturday, 2 November 2024</p>
                <p>To be announced</p>
                <p>Indraprastha Ballroom - UNS INN</p>
              </div>
            </div>
            <div className="md:hidden">
              <Maps />
            </div>
            <div>
              <p className="text-[#bfbfbf]">Follow for further information</p>
              <div className="flex gap-5 mt-2 text-[24px]">
                <a
                  href="https://www.instagram.com/tedxuns2024/"
                  target="_blank"
                >
                  <div className="text-[#bfbfbf] text-[14px] md:text-[18px] flex border p-2 px-4 gap-3 items-center rounded-xl hover:bg-red transition duration-300 ease-in hover:border-none">
                    <FaInstagram size={20} />
                    @tedxuns2024
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

const Maps = () => {
  return (
    <div className="lg:w-[45%] w-full mt-8 lg:mt-0">
      <h1>Ini Maps</h1>
    </div>
  );
};

export default Event;
