import React from "react";
import { events } from "@data/events";

const OurEvents = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white space-y-10 py-20">
      <h1 className="text-h5 font-bold">
        The Experience <span className="text-red-700">We Create</span>
      </h1>
      <div className="grid grid-cols-3 w-[90%] gap-10">
        {events.map((event) => (
          <EventContainer
            key={event.id}
            title={event.title}
            description={event.description}
            imgSrc={event.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

const EventContainer = ({ title, description, imgSrc }) => {
  return (
    <div className="border-2 border-red-700 p-5 rounded-3xl text-center space-y-5 cursor-pointer hover:bg-red-700 transition duration-300">
      <img src={imgSrc} className="w-[100px] h-[100px] mx-auto" alt={title} />
      <h5 className="text-[22px] font-bold">{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default OurEvents;
