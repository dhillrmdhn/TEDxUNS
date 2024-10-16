import React from "react";
import QRCode from "react-qr-code";

const QRTicket = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const url = `/presence/${user.id}`

  return (
    <div className="text-white flex flex-col space-y-10 w-full justify-center items-center">
      <div>
        <h3 className="text-h3 font-bold">
          Your <span className="text-red-700">Tickets</span>
        </h3>
      </div>
      <div className="text-center space-y-4">
        <div className="bg-white rounded-3xl">
          <QRCode value={url} style={{ padding: "20px" }} />
        </div>
        <p className="text-[#bfbfbf] text-[18px]">Scan at the venue</p>
      </div>
    </div>
  );
};

export default QRTicket;
