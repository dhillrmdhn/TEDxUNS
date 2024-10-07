import React from "react";
import Payment from "./partials/Payment";
import PaymentNotPaid from "./partials/PaymentNotPaid";
import Event from "./partials/Event";
import Profile from "./partials/Profile";
import QRTicket from "./partials/QRTicket";
import PaymentWaiting from "./partials/PaymentWaiting";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black py-20 mt-12">
      <div className="space-y-5 mb-10">
        <Payment />
        <PaymentWaiting />
      </div>
      <div className="space-y-5 md:space-y-10">
      <Event />
      <Profile />
      <QRTicket />
      </div>
    </div>
  );
};

export default Dashboard;
