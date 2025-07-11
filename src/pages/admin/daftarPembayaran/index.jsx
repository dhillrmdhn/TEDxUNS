import React from "react";
import { useNavigate } from "react-router-dom";
import TablePayment from "./partials/tablePayment";

const DaftarPembayaran = () => {
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center py-20">
      <div className="w-[90%]">
        <h1 className="text-h3 font-bold text-center mb-5">
          Daftar Pembayaran
        </h1>
        <TablePayment />
      </div>
      <button
        className="text-white bg-red-700 px-8 py-2 rounded-xl hover:bg-red-800 mt-6"
        onClick={() => nav("/admin")}
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default DaftarPembayaran;
