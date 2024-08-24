import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center bg-black text-white h-[80px]">
      <div className="w-[90%] flex justify-between">
        <div>
          <img
            src="https://i.ibb.co.com/n8GdCvJ/Whats-App-Image-2024-08-21-at-13-47-21.jpg"
            className="h-10"
            alt=""
          />
        </div>
        <div className="flex space-x-10 items-center cursor-pointer">
          <Link to="/">
            <p className="hover:text-red-700">Home</p>
          </Link>
          <Link to="/events">
            <p className="hover:text-red-700">Event</p>
          </Link>
          <Link to="/partnership">
            <p className="hover:text-red-700">Partnership</p>
          </Link>
          <Link to="/merchandise">
            <p className="hover:text-red-700">Merchandise</p>
          </Link>
        </div>
        <div>
          <Link to="/register">
            <button className="text-white bg-red-700 px-4 py-2 rounded-xl hover:bg-red-800 font-bold">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
