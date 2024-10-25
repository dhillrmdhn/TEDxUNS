import React from "react";
import Ticket from "@images/ETicket.svg";
import QRCode from "react-qr-code";

const QRTicketDisplay = ({ name, url }) => {
  return (
    <div className="relative text-white flex flex-col w-full justify-center items-center bg-tickets">
      <img src={Ticket} alt="Ticket" className="w-full h-auto" />
      <div className="absolute bottom-[16.5%] left-[8%] text-center">
        <h1 className="font-semibold text-white text-[8px] md:text-[15px]">Name: {name}</h1>
      </div>
      <div className="absolute flex justify-start items-start right-0 md:h-[170px] h-[85px] md:w-[22%] w-[22.5%]">
        <div className="w-[18vw] p-1 md:p-2 bg-white rounded-sm md:rounded-lg max-w-[140px]">
          <QRCode
            value={url}
            size={256}
            bgColor="#ffffff"
            style={{
              width: "100%",
              height: "auto",
              backgroundColor: "#ffffff",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default QRTicketDisplay;
