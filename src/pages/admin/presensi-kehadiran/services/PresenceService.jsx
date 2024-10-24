import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PresenceUser } from "../../../../services/adminService";

const PresenceService = () => {
  const { id } = useParams();
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const presence = async () => {
      try {
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    presence();
  }, [id]);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-16">
      <div className="bg-green-500 w-full rounded-xl p-5 space-y-5">
        <h1 className="text-h3 font-bold text-center">
          Registered Attendee - Present
        </h1>
        <div className="w-full h-[2px] bg-white my-2"></div>
        <div className="space-y-5 text-black">
          <p className="text-[24px] font-bold">Participant's Name: </p>
          <p className="text-[24px] font-bold">Email: </p>
          <p className="text-[24px] font-bold">Additional Lanyard: </p>
        </div>
      </div>
      <div className="bg-red w-full rounded-xl p-5 space-y-5">
        <h1 className="text-h3 font-bold text-center">Unregistered attendee</h1>
      </div>
      <div className="bg-red w-full rounded-xl p-5 space-y-5">
        <h1 className="text-h3 font-bold text-center">Attendee has checked in</h1>
      </div>
      <button className="bg-red-700 text-white px-8 py-2 rounded-xl hover:bg-red-800 mt-6">
        Back To Presence
      </button>
    </div>
  );
};

export default PresenceService;
