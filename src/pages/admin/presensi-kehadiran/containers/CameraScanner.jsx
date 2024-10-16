import { Scanner } from "@yudiel/react-qr-scanner";
import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const CameraScanner = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(data);
  }, [data, navigate]);

  return (
    <div className="">
      <Scanner onScan={(result) => setData(result[0].rawValue)} />
    </div>
  );
};

export default CameraScanner;
