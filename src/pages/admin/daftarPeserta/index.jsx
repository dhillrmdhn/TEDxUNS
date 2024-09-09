import React from "react";
import TableMember from "./partials/tableMember";
import { useNavigate } from "react-router-dom";

const DaftarPeserta = () => {
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center py-20">
      <div className="w-[90%]">
        <h1 className="text-h3 font-bold text-center mb-5">Daftar Peserta</h1>
        <TableMember />
      </div>
      <button
        className="text-white bg-red-700 px-8 py-2 rounded-xl hover:bg-red-800 mt-2"
        onClick={() => nav("/admin")}
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default DaftarPeserta;
