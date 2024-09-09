import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "@icon/TEDLogoDesc.png";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Event", path: "/events" },
    { name: "Partnership", path: "/partnership" },
    { name: "Merchandise", path: "/merchandise" },
  ];

  return (
    <nav className="flex bg-black justify-center items-center text-white h-[80px]">
      <div className="w-[90%] flex justify-between">
        <div>
          <NavLink to="/">
            <img src={Icon} className="h-10" alt="" />
          </NavLink>
        </div>
        <div className="flex space-x-10 items-center cursor-pointer">
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
        <div>
          <NavLink to="/register">
            <button className="text-white bg-red-700 px-4 py-2 rounded-xl hover:bg-red-800 font-bold">
              Get Started
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
