import React from "react";
import { events } from "@data/events";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const OurEvents = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center text-white space-y-10 p-14 py-20">
      <h1 className="text-h4 font-bold">
        Past Events <br />
        <span className="text-red">TEDx</span> Sebelas Maret University
      </h1>
      <div className="grid grid-cols-2 gap-10">
        {events.map((event) => (
          <EventContainer
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

const EventContainer = ({ title, description, imgSrc }) => {
  return (
    <div
      className={`border-2 border-red-700 p-5 rounded-3xl text-center space-y-5 transition duration-300`}
    >
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
      >
        {Array.isArray(imgSrc) ? (
          imgSrc.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                className="rounded-2xl mx-auto"
                alt={`${title} ${index}`}
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <img src={imgSrc} className="rounded-2xl mx-auto" alt={title} />
          </SwiperSlide>
        )}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>

      <div>
        <h5 className="text-[22px] font-bold">{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default OurEvents;
