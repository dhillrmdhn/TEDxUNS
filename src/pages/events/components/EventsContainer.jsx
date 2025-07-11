import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const EventsContainer = ({ title, description, imgSrc }) => {
  return (
    <div
      className={`border-2 min-h-[78vh] md:min-h-[88vh] border-red-700 p-4 md:p-5 rounded-3xl text-center space-y-5 backdrop-blur hover:bg-red`}
    >
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="swiper-container"
      >
        {Array.isArray(imgSrc) ? (
          imgSrc.map((src, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div className="h-[200px] md:h-[290px] flex-grow flex items-center">
                <img
                  src={src}
                  className="rounded-2xl mx-auto w-full h-full object-cover"
                  alt={`${title} ${index}`}
                />
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide className="flex justify-center items-center">
            <div className="h-[180px] md:h-[290px] flex-grow flex items-center">
              <img
                src={imgSrc}
                className="rounded-2xl mx-auto w-full h-full object-cover"
                alt={title}
              />
            </div>
          </SwiperSlide>
        )}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>

      <div>
        <h5 className="text-lg md:text-[22px] font-bold pb-3">{title}</h5>
        <p className="text-[14.5px] md:text-base text-[#bfbfbf] text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default EventsContainer;
