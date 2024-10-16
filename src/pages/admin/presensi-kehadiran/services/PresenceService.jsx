import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PresenceUser } from "../../../../services/adminService";

const PresenceService = () => {
  const { id } = useParams();
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const presence = async () => {
      try {
        // const response = await PresenceUser(id);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    presence();
  }, [id]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <h1 className="text-h3 font-bold text-red">Informasi Presensi</h1>
    </div>
  );
};

export default PresenceService;
