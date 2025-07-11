import React, { useEffect } from "react";
import Form from "./partials/Form";
import Background from "../../../assets/videos/BumperBackground.mp4";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [])

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="relative hidden md:block">
        <video
          src={Background}
          autoPlay
          muted
          loop
          className="absolute w-full h-full object-cover z-0"
        />
      </div>
      <div className="bg-black flex items-center px-8 md:px-20">
        <Form />
      </div>
    </div>
  );
};

export default Login;
