import React from "react";
import { events } from "@data/events";
import EventsContainer from "../components/EventsContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

const OurEvents = () => {
  return (
    <div className="flex flex-col justify-center text-white space-y-10 px-4 py-8 md:px-14 md:py-10 mt-16">
      <h1 className="text-h5 md:text-h4 font-bold text-left">
        Past Events <br />
        <span className="text-red">TEDx</span> Sebelas Maret University
      </h1>
      <div className="flex flex-col">
        <div className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            {events.map((event) => (
              <SwiperSlide key={event.id} className="">
                <EventsContainer
                  title={event.title}
                  description={event.description}
                  imgSrc={event.imgSrc}
                  slug={event.slug}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-center gap-5 mt-5">
          <div className="custom-prev flex items-center p-2 bg-red rounded-full cursor-pointer hover:bg-red-800">
            <GrFormPreviousLink size={28} />
          </div>
          <div className="custom-next flex items-center p-2 bg-red rounded-full cursor-pointer hover:bg-red-800">
            <GrFormNextLink size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEvents;
