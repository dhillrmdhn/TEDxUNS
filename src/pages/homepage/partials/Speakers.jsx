import React from "react";

const Speakers = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white space-y-10">
      <div>
        <h1 className="text-h5 font-bold">
          Our <span className="text-red-700">Speakers</span>
        </h1>
      </div>
      <div className="flex justify-center space-x-10">
        <div className="w-[90%] border-2 border-red-700 p-5 rounded-3xl text-center space-y-5">
          <div>
            <p className="text-[#bfbfbf]">Speaker 1</p>
            <h5 className="text-[20px]">Master of Quarter Life Crisis</h5>
          </div>
          <img
            src="https://i.ibb.co.com/w4wS4vv/ted-logo-3704-A5-CF1-F-seeklogo-com.png"
            className="w-[100px] h-[100px] mx-auto"
            alt=""
          />
          <h5 className="text-[20px] font-bold">Ahmad Nur Hidayat</h5>
        </div>
        <div className="w-[90%] border-2 border-red-700 p-5 rounded-3xl text-center space-y-5">
          <div>
            <p className="text-[#bfbfbf]">Speaker 2</p>
            <h5 className="text-[20px]">Master of Quarter Life Crisis</h5>
          </div>
          <img
            src="https://i.ibb.co.com/w4wS4vv/ted-logo-3704-A5-CF1-F-seeklogo-com.png"
            className="w-[100px] h-[100px] mx-auto"
            alt=""
          />
          <h5 className="text-[20px] font-bold">Ahmad Nur Hidayat</h5>
        </div>
        <div className="w-[90%] border-2 border-red-700 p-5 rounded-3xl text-center space-y-5">
          <div>
            <p className="text-[#bfbfbf]">Speaker 3</p>
            <h5 className="text-[20px]">Master of Quarter Life Crisis</h5>
          </div>
          <img
            src="https://i.ibb.co.com/w4wS4vv/ted-logo-3704-A5-CF1-F-seeklogo-com.png"
            className="w-[100px] h-[100px] mx-auto"
            alt=""
          />
          <h5 className="text-[20px] font-bold">Ahmad Nur Hidayat</h5>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
