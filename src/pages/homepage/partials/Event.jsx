import React, { useEffect, useState } from "react";
import RedButton from "@components/button/RedButton";
import WhiteButton from "@components/button/WhiteButton";
import { useNavigate } from "react-router-dom";
import { CountUser } from "../../../services/userService";

const Event = () => {
  const navigate = useNavigate();
  const [totalUsers, setTotalUsers] = useState(19);
  const [ticketType, setTicketType] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const res = await CountUser();
      setTotalUsers(res.count);
    };

    const checkTicketType = () => {
      const currentDate = new Date();
      const currentDay = currentDate.getDate();
      const currentMonth = currentDate.getMonth() + 1;
      const currentYear = currentDate.getFullYear();

      if (
        totalUsers < 20 &&
        currentYear === 2024 &&
        currentMonth === 10 &&
        currentDay < 15
      ) {
        setTicketType("earlyBird");
      } else if (
        totalUsers >= 20 &&
        totalUsers <= 50 &&
        currentYear === 2024 &&
        currentMonth === 10 &&
        currentDay >= 15 &&
        currentDay <= 19
      ) {
        setTicketType("presale");
      } else if (
        currentYear === 2024 &&
        currentMonth === 10 &&
        currentDay >= 20
      ) {
        setTicketType("normalPrice");
      } else {
        setTicketType("closed");
      }
    };

    getUser();
    checkTicketType();
  }, [totalUsers]);

  const renderButton = () => {
    const ticketPrices = {
      earlyBird: 55000,
      presale: 70000,
      normalPrice: 75000,
    };

    const price = ticketPrices[ticketType] || 0;

    switch (ticketType) {
      case "earlyBird":
        return (
          <RedButton
            onClick={() => {
              navigate("/payment", { state: { ticketType, price } });
            }}
          >
            Grab your early bird tickets today! Register now!
          </RedButton>
        );
      case "presale":
        return (
          <RedButton
            onClick={() => {
              navigate("/payment", { state: { ticketType, price } });
            }}
          >
            Grab your presale tickets today! Register now!
          </RedButton>
        );
      case "normalPrice":
        return (
          <RedButton
            onClick={() => {
              navigate("/payment", { state: { ticketType, price } });
            }}
          >
            Special price today only! Grab it now!
          </RedButton>
        );
      default:
        return (
          <div className="text-[#bfbfbf] text-[18px] cursor-not-allowed">
            Ticket sales are now closed. Please stay tuned for our next session!
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-end bg-event-section bg-cover items-center text-white p-6 py-10 sm:p-14">
      <div className="w-full space-y-5 md:space-y-10">
        <h1 className="text-h5 sm:text-h4 font-bold">
          Are you ready for our <span className="text-red">Main Event?</span>
        </h1>
        <div className="w-full flex flex-col lg:flex-row justify-between items-center space-y-8">
          <div className="flex flex-col justify-between space-y-6 lg:space-y-5">
            <h3 className="text-[24px] sm:text-[30px] font-bold">
              TEDxSebelas Maret University 2024: <br /> Behind the X-ynergy:{" "}
              <br />
              Uncovering Both Sides
            </h3>
            <EventDate />
            <p className="text-sm md:text-base lg:text-lg font-bold">
              You will receive: Live TED Talks, Entertainment, Lunch, <br /> and an
              exclusive pin
            </p>
            {renderButton()}
          </div>
          <Maps />
        </div>
      </div>
    </div>
  );
};

const EventDate = () => {
  return (
    <div className="flex space-x-10 text-[18px] sm:text-[20px]">
      <div className="text-[#bfbfbf] space-y-3">
        <p>Date</p>
        <p>Time</p>
        <p>Place</p>
      </div>
      <div className="space-y-3">
        <p>Saturday, 2 November 2024</p>
        <p>08.00 - Finish</p>
        <p>Indraprastha Ballroom - UNS INN</p>
      </div>
    </div>
  );
};

const Maps = () => {
  return (
    <div className="lg:w-[45%] w-full mt-8 lg:mt-0">
      <iframe
        width="100%"
        height="300"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=UNS%20INN%20Hotel%20Surakarta+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  );
};

export default Event;
