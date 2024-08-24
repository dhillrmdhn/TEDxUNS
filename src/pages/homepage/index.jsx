import React from "react";
import Heading from "./partials/Heading";
import About from "./partials/About";
import Event from "./partials/Event";
import Speakers from "./partials/Speakers";

const Homepage = () => {
  return (
    <div className="bg-gradient-to-r from-black from-50% to-red-800">
        <Heading />
        <About />
        <Event />
        <Speakers />
    </div>
  );
};

export default Homepage;
