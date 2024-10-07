import React, { useState } from "react";
import InputText from "../../../../components/input/inputText";
import { Link, useNavigate } from "react-router-dom";
import useZod from "../../../../hooks/useZod";
import loginSchema from "../models/loginSchema";
import { login } from "../../../../services/authService";
import { toast, ToastContainer } from "react-toastify";

const Form = () => {
  const [data, setData] = useState({});
  const { errors, validate } = useZod(loginSchema);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate(data);
    const loadingToastId = toast.info("Loading... Please wait", {
      autoClose: false,
    });

    if (isValid) {
      setIsLoading(true);
      try {
        const response = await login(data);
        if (response) {
          localStorage.setItem("token", response.token);
          localStorage.setItem(
            "user",
            JSON.stringify({
              role: response.user?.id_role,
              fullname: response.user?.fullname.split(" ")[0],
              id: response.user?.id,
            })
          );

          toast.dismiss(loadingToastId);
          toast.success(`Login successfully, Hi! ${response.user?.fullname}`);

          setTimeout(() => {
            navigate("/");
          }, 1500);
        }
      } catch (error) {
        console.log(error);
        toast.dismiss(loadingToastId);
        toast.error("Login failed. Please check your credentials.");
      }
    }
  };

  const inputFields = [
    {
      name: "email",
      type: "email",
      placeholder: "Your Email",
      label: "Email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Your Password",
      label: "Password",
    },
  ];

  return (
    <div className="w-full mt-16">
      <ToastContainer />
      <form
        className="min-h-screen md:min-h-0 flex flex-col justify-center items-center w-full text-white space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="w-full space-y-6 rounded-3xl">
          <div className="space-y-2 text-center md:text-left">
            <h1 className="text-h4 md:text-h3 font-bold">Welcome Back!</h1>
            <h3 className="text-lg md:text-[24px] text-[#bfbfbf]">
              Login to your account
            </h3>
          </div>
          <div className="space-y-3">
            {inputFields.map((field) => (
              <InputText
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={data[field.name] || ""}
                onChange={handleChange}
                error={errors[field.name]?._errors[0]}
                id={field.name}
              >
                {field.label}
              </InputText>
            ))}
          </div>
          <div className="space-y-8">
            <button
              className="text-white bg-red-700 px-8 py-2 rounded-xl hover:bg-white hover:text-black transition duration-100 ease-in font-bold w-full md:w-auto"
              type="submit"
            >
              {isLoading ? "Logging In..." : "Login"}
            </button>
            <div className="flex justify-center md:justify-start space-x-2">
              <p>Don't have an account?</p>
              <div className="font-bold hover:text-red">
                <Link to="/register">Register here</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
