import React, { useEffect, useState } from "react";
import Payment from "./partials/Payment";
import PaymentNotPaid from "./partials/PaymentNotPaid";
import Event from "./partials/Event";
import Profile from "./partials/Profile";
import QRTicket from "./partials/QRTicket";
import PaymentWaiting from "./partials/PaymentWaiting";
import { useNavigate } from "react-router-dom";
import PaymentDecline from "./partials/PaymentDecline";
import { GetUserById } from "../../services/userService";
import { logout } from "../../services/authService";
import Rundown from "./partials/Rundown";
import RundownPage from "./partials/Rundown";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
      window.location.reload();
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    try {
      logout();
    } catch (error) {
      console.log(error);
    }
    navigate("/");
    window.location.reload();
  };

  const [data, setData] = useState({});
  const [isPayment, setIsPayment] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await GetUserById();
        setData(response.user);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (data.payment?.status === 1) {
      setIsPayment(true);
    }
  }, [data.payment]);

  const RenderStatus = () => {
    if (data.payment) {
      if (data.payment.status === 0) {
        return <PaymentWaiting />;
      } else if (data.payment.status === 1) {
        return <Payment />;
      } else if (data.payment.status === 2) {
        return <PaymentDecline />;
      }
    } else {
      return <PaymentNotPaid />;
    }
  };

  return (
    <div className="min-h-screen bg-black py-20 mt-12">
      <div className="space-y-5 mb-10">{RenderStatus()}</div>
      <div className="flex flex-col items-center space-y-5 md:space-y-10">
        <Event />
        <Profile data={data} />
        {isPayment && (
          <div className="flex flex-col space-y-5 items-center">
            <QRTicket />
            <RundownPage />
          </div>
        )}
        <button
          className="text-white bg-red-700 px-8 py-2 rounded-xl font-bold hover:bg-red-800"
          onClick={handleLogout}
        >
          Log Out Account
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
