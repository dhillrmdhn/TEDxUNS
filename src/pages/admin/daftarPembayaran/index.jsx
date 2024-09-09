import React from "react";
import { useNavigate } from "react-router-dom";
import TablePayment from "./partials/tablePayment";

const DaftarPembayaran = () => {
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center py-20">
      <div className="w-[90%]">
        <h1 className="text-h3 font-bold text-center mb-5">Daftar Pembayaran</h1>
        <TablePayment />
      </div>
    </div>
  );
};

export default DaftarPembayaran;
