import React from "react";
import Payment from "./partials/Payment";
import PaymentNotPaid from "./partials/PaymentNotPaid";
import Event from "./partials/Event";
import Profile from "./partials/Profile";
import QRTicket from "./partials/QRTicket";
import PaymentWaiting from "./partials/PaymentWaiting";

const Dashboard = () => {
  return <div className="min-h-screen bg-black py-20">
    <div className="space-y-5">
    <Payment />
    <PaymentNotPaid />
    <PaymentWaiting />
    </div>
    <Event />
    <Profile />
    <QRTicket />
  </div>;
};

export default Dashboard;
