import React from "react";
import Payment from "./partials/Payment";
import PaymentNotPaid from "./partials/PaymentNotPaid";
import Event from "./partials/Event";
import Profile from "./partials/Profile";
import QRTicket from "./partials/QRTicket";
import PaymentWaiting from "./partials/PaymentWaiting";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }

  return (
    <div className="min-h-screen bg-black py-20 mt-12">
      <div className="space-y-5 mb-10">
        <PaymentNotPaid />
      </div>
      <div className="flex flex-col items-center space-y-5 md:space-y-10">
        <Event />
        <Profile />
        <QRTicket />
        <button className="text-white bg-red-700 px-8 py-2 rounded-xl font-bold hover:bg-red-800" onClick={handleLogout}>
          Log Out Account
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
