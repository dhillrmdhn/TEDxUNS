import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const EventsContainer = ({ title, description, imgSrc }) => {
  return (
    <div
      className={`border-2 border-red-700 p-5 rounded-3xl text-center space-y-5 transition duration-300 h-[83vh]`}
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
              <div className="h-[290px] rounded-2xl">
                <img
                  src={src}
                  className="rounded-2xl mx-auto w-full h-full object-cover"
                  alt={`${title} ${index}`}
                />
              </div>
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
        <h5 className="text-[22px] font-bold pb-3">{title}</h5>
        <p className="text-[#bfbfbf] text-justify">{description}</p>
      </div>
    </div>
  );
};

export default EventsContainer;
