import React from "react";
import InputText from "../../../../components/input/inputText";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center w-full text-white space-y-6">
      <div className="w-full space-y-6 rounded-3xl">
        <div>
          <h1 className="text-h3 font-bold">Login</h1>
        </div>
        <div className="space-y-3">
          <InputText>Email</InputText>
          <InputText>Password</InputText>
          <p className="cursor-pointer">Forgot Password?</p>
        </div>
        <div className="space-x-3">
          <button className="text-white bg-red-700 px-4 py-2 rounded-xl hover:bg-white hover:text-black transition duration-100 ease-in">
            Login Here
          </button>
          <Link to="/register">
            <button className="text-black bg-white px-4 py-2 rounded-xl hover:bg-red   hover:text-white transition duration-100 ease-in">
              Don't have an account? Register here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Form;
