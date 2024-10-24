import React from "react";
import QRTicketDisplay from "../components/QRTicket";
import QRCode from "react-qr-code";

const QRTicket = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const url = `${user.id}`;

  return (
    <div className="text-white flex flex-col space-y-10 w-full justify-center items-center">
      <div>
        <h3 className="text-h3 font-bold">
          Your <span className="text-red-700">Tickets</span>
        </h3>
      </div>
      <div>
        <QRTicketDisplay name={user.fullname} url={url} />
      </div>
    </div>
  );
};

export default QRTicket;
