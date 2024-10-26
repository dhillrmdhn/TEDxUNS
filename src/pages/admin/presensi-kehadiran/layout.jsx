import React, { useEffect, useState } from "react";
import CameraScanner from "./containers/CameraScanner";
import { GetUserAdminByID } from "../../../services/adminService";
import { use } from "framer-motion/client";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const [attendeeData, setAttendeeData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    if (attendeeData !== 400 && attendeeData !== null) {
      const fetchData = async () => {
        try {
          const response = await GetUserAdminByID(attendeeData);
          setUserData(response.user);
        } catch (error) {
          console.error(error.response.status);
        }
      };

      fetchData();
    }
  }, [attendeeData]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white py-10">
      <div className="flex flex-col items-center space-y-10">
        <h1 className="text-h4 md:text-h3 font-bold">Presensi Kehadiran</h1>
        <div className="h-[400px] w-[400px]">
          <CameraScanner setAttendeeData={setAttendeeData} />
        </div>
        {attendeeData !== 400 && attendeeData !== null && (
          <div className="bg-green-500 w-full rounded-xl p-5 space-y-5">
            <h1 className="text-h5 font-bold text-center">
              Registered Attendee - Present
            </h1>
            <div className="w-full h-[2px] bg-white my-2"></div>
            <div className="text-black">
              <p className="text-[24px]">
                Participant's Name:{" "}
                <span className="font-bold">{userData?.fullname} </span>
              </p>
              <p className="text-[24px]">
                Phone Number:{" "}
                <span className="font-bold">{userData?.phone} </span>
              </p>
              <p className="text-[24px]">
                Additional Lanyard:{" "}
                <span className="font-bold">
                  {userData?.payment?.additional === 1 ? "Yes" : "No"}{" "}
                </span>
              </p>
            </div>
          </div>
        )}
        {attendeeData === 400 && (
          <div className="bg-red-500 w-full rounded-xl p-5 space-y-5">
            <h1 className="text-h5 font-bold text-center">
              User Already Present
            </h1>
          </div>
        )}
        {attendeeData === 404 && (
          <div className="bg-red-500 w-full rounded-xl p-5 space-y-5">
            <h1 className="text-h5 font-bold text-center">
              User already present
            </h1>
          </div>
        )}
        <button
          className="text-white bg-red-700 px-8 py-2 rounded-xl hover:bg-red-800 mt-2"
          onClick={() => nav("/admin")}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Layout;
