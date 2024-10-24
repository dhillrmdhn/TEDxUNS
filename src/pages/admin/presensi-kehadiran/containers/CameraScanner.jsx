import { Scanner } from "@yudiel/react-qr-scanner";
import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { PresenceUser } from "../../../../services/adminService";
import { toast } from "react-toastify";

const CameraScanner = ({ setAttendeeData }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const Presence = async () => {
      try {
        if (data) {
          toast.info("Loading... Please wait");
          const response = await PresenceUser(data);
          if (response) {
            toast.success("Attendance marked successfully");
            setAttendeeData(data);
          } else if (response === "User already present") {
            toast.error("User already present");
            setAttendeeData(400);
          } else {
            toast.error("Failed to mark attendance");
            setAttendeeData(400);
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setData(null);
      }
    };

    if (data !== null) {
      Presence();
    }
  }, [data]);

  return (
    <div className="">
      <Scanner onScan={(result) => setData(result[0].rawValue)} />
    </div>
  );
};

export default CameraScanner;
