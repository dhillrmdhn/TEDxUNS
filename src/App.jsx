import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Homepage from "./pages/homepage";
import Footer from "./components/footer";
import Events from "./pages/events";
import Partnership from "./pages/partnership";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Dashboard from "./pages/dashboard";
import Payment from "./pages/payment";
import Merchandise from "./pages/merchandise";
import ComingSoon from "./pages/soon";
import DashboardAdmin from "./pages/admin/dashboard";
import DaftarPeserta from "./pages/admin/daftarPeserta";
import DaftarPembayaran from "./pages/admin/daftarPembayaran";
import DetailEvents from "./pages/detailEvents";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import FeatureSoon from "./pages/soon/featureSoon";
import ScrollToTop from "./utils/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <ToastContainer />
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/events" element={<Events />} />
                <Route path="/events/:slug" element={<DetailEvents />} />
                <Route path="/partnership" element={<FeatureSoon />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/merchandise" element={<Merchandise />} />
                <Route path="/soon" element={<FeatureSoon />} />
              </Routes>
              <Footer />
            </>
          }
        />
        <Route path="/admin/*" element={<DashboardAdmin />} />
        <Route path="/admin/daftar-peserta" element={<DaftarPeserta />} />
        <Route path="/admin/verifikasi-pembayaran" element={<DaftarPembayaran />} />
      </Routes>
    </Router>
  );
};

export default App;
