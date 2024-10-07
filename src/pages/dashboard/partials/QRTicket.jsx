import React from "react";

const QRTicket = () => {
  return (
    <div className="text-white flex flex-col space-y-10 w-full justify-center items-center">
      <div>
        <h3 className="text-h3 font-bold">
          Your <span className="text-red-700">Tickets</span>
        </h3>
      </div>
      <div className="text-center space-y-4">
        <div className="bg-white rounded-3xl">
          <img
            src="https://i.ibb.co.com/87zC5Yw/QR-code-for-mobile-English-Wikipedia-svg.png"
            alt=""
          />
        </div>
        <p className="text-[#bfbfbf] text-[18px]">Scan at the venue</p>
      </div>
    </div>
  );
};

export default QRTicket;
