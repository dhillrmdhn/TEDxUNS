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

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        {/* <Route path="/events" element={<Events />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/merchandise" element={<Merchandise />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
