import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";
import Icon from "@icon/TEDLogoDesc.png"; // Ganti dengan path logo Anda

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { name: "Home", path: "/" },
    { name: "Event", path: "/events" },
    { name: "Partnership", path: "/partnership" },
    { name: "Merchandise", path: "/merchandise" },
  ];

  const isAuthenticated = () => {
    return !!localStorage.getItem("token");
  };

  const role = JSON.parse(localStorage.getItem("role"));
  const user = role?.fullname || "User";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-black text-white h-[80px] fixed top-0 left-0 w-full flex justify-between items-center px-6 lg:px-12 z-50">
      <div className="flex-shrink-0">
        <NavLink to="/">
          <img src={Icon} className="lg:h-10 h-8" alt="Logo" />
        </NavLink>
      </div>

      <div className="hidden lg:flex space-x-10 items-center">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `hover:text-red-700 ${isActive ? "text-red-700" : ""}`
            }
          >
            <p className="font-bold">{link.name}</p>
          </NavLink>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        {isAuthenticated() ? (
          <NavLink to="/dashboard">
            <button className="text-white ring-2 ring-red px-4 py-2 rounded-xl hover:bg-red-800 font-bold">
              <div className="flex space-x-2 items-center">
                <FaRegUserCircle className="text-[16px] lg:text-[20px]" />
                <p className="text-[13px] lg:text-[16px]">Profile</p>
              </div>
            </button>
          </NavLink>
        ) : (
          <NavLink to="/register">
            <button className="text-white bg-red-700 px-4 py-2 rounded-xl hover:bg-red-800 font-bold">
              Get Started
            </button>
          </NavLink>
        )}

        <button
          className="text-white lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      <div
        className={`lg:hidden absolute top-[65px] left-0 w-full bg-black transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 py-6">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-red-700 ${isActive ? "text-red-700" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              <p className="font-bold">{link.name}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
