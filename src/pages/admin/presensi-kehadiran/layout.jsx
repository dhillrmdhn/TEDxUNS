import React from "react";
import CameraScanner from "./containers/CameraScanner";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center space-y-10">
        <h1 className="text-h2 font-bold">Presensi Kehadiran</h1>
        <div className="h-[400px] w-[400px]">
          <CameraScanner />
        </div>
      </div>
    </div>
  );
};

export default Layout;
