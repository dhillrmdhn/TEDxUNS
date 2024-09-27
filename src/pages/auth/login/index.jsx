import React from "react";
import Form from "./partials/Form";

const Login = () => {
  return (
    <div className="min-h-screen grid grid-cols-2">
      <div className="bg-red"></div>
      <div className="bg-black flex px-20">
        <Form />
      </div>
    </div>
  );
};

export default Login;
