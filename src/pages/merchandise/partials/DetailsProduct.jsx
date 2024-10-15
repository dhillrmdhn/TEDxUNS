import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";

SwiperCore.use([Navigation, Pagination]);

const DetailsProduct = ({ product }) => {
  return (
    <div className="flex flex-col items-center border-2 border-red-700 rounded-3xl p-2 md:p-6 gap-5 bg-black">
      <div className="h-[40vh] w-full md:h-[70vh] md:w-[120vh] rounded-3xl">
        <Swiper spaceBetween={10} navigation className="h-full rounded-3xl">
          {product.imgSrc.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Product Image ${index + 1}`}
                className="w-full h-full object-cover rounded-3xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col justify-center space-y-5 px-4 md:px-0">
        <div className="space-y-5 text-center md:text-left">
          <h3 className="text-h5 md:text-h3 font-bold">{product.name}</h3>
          <p className="text-[#bfbfbf] text-[16px] md:text-[18px]">
            {product.description}
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h3 className="text-h5 md:text-h4 font-bold">{product.price}</h3>
            <a
              href="https://uns.id/MerchTEDxUNS" target="_blank"
              className="px-4 py-2 md:px-6 md:py-2 rounded-xl bg-red font-semibold cursor-pointer hover:bg-red-900 transition duration-300 flex justify-center items-center"
            >
              Order Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
