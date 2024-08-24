import React from "react";

const Event = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white">
      <div className="w-[90%]">
        <div>
          <h1 className="text-[24px] text-[#bfbfbf]">
            Are you ready for our Main Event?
          </h1>
        </div>
        <div className="mt-5 border border-red-700 p-5 rounded-3xl flex items-center">
          <div className="w-[60%] space-y-6">
            <h4 className="text-h5 font-bold">
              <span className="text-red-700">TEDx </span>Sebelas Maret
              University 2024: The Flavors of Wisdom
            </h4>
            <div className="flex">
              <div className="space-y-3 text-[#bfbfbf]">
                <p>Date</p>
                <p>Time</p>
                <p>Place</p>
              </div>
              <div className="space-y-3 ml-7">
                <p>Monday, 31 February 2024</p>
                <p>19.00 - 25.00</p>
                <p>Bumi bagian barat</p>
              </div>
            </div>
            <div>
              <button className="text-white bg-red-700 px-4 py-2 rounded-xl hover:bg-red-800">
                Learn more
              </button>
            </div>
          </div>
          <div className="w-[40%]">
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
        </div>
      </div>
    </div>
  );
};

export default Event;
