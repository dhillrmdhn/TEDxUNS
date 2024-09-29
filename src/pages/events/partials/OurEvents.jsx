import React from "react";
import { events } from "@data/events";
import EventsContainer from "../components/EventsContainer";

const OurEvents = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center text-white space-y-10 p-14 py-10">
      <h1 className="text-h4 font-bold">
        Past Events <br />
        <span className="text-red">TEDx</span> Sebelas Maret University
      </h1>
      <div className="grid grid-cols-2 gap-10">
        {events.map((event) => (
          <EventsContainer
            key={event.id}
            title={event.title}
            description={event.description}
            imgSrc={event.imgSrc}
            slug={event.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default OurEvents;
