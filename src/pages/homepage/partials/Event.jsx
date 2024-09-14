import React from "react";
import RedButton from "@components/button/RedButton";

const Event = () => {
  return (
    <div className="min-h-screen flex flex-col justify-end bg-event-section bg-cover items-center text-white p-14">
      <div className="w-full space-y-10">
        <h1 className="text-h4 font-bold">
          Are you ready for our <span className="text-red">Main Event ?</span>
        </h1>
        <div className="w-full flex justify-between">
          <div className="flex flex-col justify-between">
            <h3 className="text-[30px] font-bold">
              TEDxSebelas Maret University 2024: <br /> The Flavors of Wisdom
            </h3>
            <Date />
            <RedButton>Register Now!</RedButton>
          </div>
          <Maps />
        </div>
      </div>
    </div>
  );
};

const Date = () => {
  return (
    <div className="flex space-x-10 text-[20px]">
      <div className="text-[#bfbfbf] space-y-3">
        <p>Date</p>
        <p>Time</p>
        <p>Place</p>
      </div>
      <div className="space-y-3">
        <p>Monday, 31 February 2024</p>
        <p>19.00 - 25.00</p>
        <p>Bumi bagian barat</p>
      </div>
    </div>
  );
};

const Maps = () => {
  return (
    <div>
      <iframe
        width="100%"
        height="300"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Jl.%20Ir.%20Sutami%20No.36%20Surakarta+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>{" "}
      <script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=d7f097f07722db889260cca6f66f0565268dccf4"
      ></script>
    </div>
  );
};

export default Event;
