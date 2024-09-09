import React from "react";
import Card from "./partials/Card";

const DashboardAdmin = () => {
  const CardContent = [
    {
      id: 1,
      title: "Daftar Peserta",
      route: "/admin/daftar-peserta",
    },
    {
      id: 2,
      title: "Verifikasi Pembayaran",
      route: "/admin/verifikasi-pembayaran",
    },
    {
      id: 3,
      title: "Presensi Kehadiran",
      route: "/admin/presensi-kehadiran",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="w-[90%] space-y-10">
        <h1 className="text-h3 font-bold text-center">
          ADMIN <span className="text-red-700">PANEL</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CardContent.map((card, id) => (
            <Card key={card.id} title={card.title} route={card.route} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
