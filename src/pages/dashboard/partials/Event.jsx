import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Event = () => {
  return (
    <div className="flex flex-col justify-center items-center text-white">
      <div className="w-[90%]">
        <div className="mt-5 border border-red-700 p-5 rounded-3xl flex items-center">
          <div className="w-full space-y-6">
            <h4 className="text-h5 font-bold">
              <span className="text-red-700">TEDx </span>Sebelas Maret
              University 2024: The Flavors of Wisdom
            </h4>
            <div className="flex">
              <div className="space-y-3 text-[#bfbfbf]">
                <p>Date</p>
                <p>Time</p>
                <p>Place</p>
              </div>
              <div className="space-y-3 ml-7">
                <p>Monday, 31 February 2024</p>
                <p>19.00 - 25.00</p>
                <p>Bumi bagian barat</p>
              </div>
            </div>
            <div>
              <p>Follow us on</p>
              <div className="flex space-x-3 text-[#bfbfbf] mt-2 text-2xl">
                <FaInstagram />
                <FaXTwitter />
                <FaTiktok />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
