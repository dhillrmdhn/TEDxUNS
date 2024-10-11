import React, { useState } from "react";
import InputText from "../../../../components/input/inputText";
import { Link, useNavigate } from "react-router-dom";
import useZod from "../../../../hooks/useZod";
import registerSchema from "../models/registerSchema";
import { toast } from "react-toastify";
import { register } from "../../../../services/authService";

const Form = () => {
  const [data, setData] = useState({});
  const { errors, validate } = useZod(registerSchema);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate(data);

    if (isValid) {
      setIsLoading(true);
      toast.info("Loading... Please wait")

      try {
        const response = await register(data);
        if (response) {
          toast.success(`Account successfully registered! Please log in.`);

          setTimeout(() => {
            navigate("/login");
          }, 1500);
        }
      } catch (error) {
        console.log(error);
        toast.error("Register failed. Please check your credentials.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const inputFields = [
    {
      id: 1,
      type: "text",
      name: "fullname",
      required: true,
      label: "Fullname",
    },
    {
      id: 2,
      type: "email",
      name: "email",
      required: true,
      label: "Email",
    },
    {
      id: 3,
      type: "password",
      name: "password",
      required: true,
      label: "Password",
    },
    {
      id: 4,
      type: "password",
      name: "password_confirmation",
      required: true,
      label: "Confirm Password",
    },
  ];

  return (
    <div className="min-h-screen md:min-h-0 flex flex-col justify-center items-center text-white w-full mt-16">
      <div className="space-y-6 w-full">
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-h4 md:text-h3 font-bold">Create an Account</h1>
          <h3 className="text-[20px] md:text-[30px] text-[#bfbfbf]">
            Get Started Now!
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
            className="text-white bg-red-700 px-8 py-2 rounded-xl hover:bg-white hover:text-black transition duration-100 ease-in w-full md:w-auto"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>
          <div className="flex justify-center md:justify-start space-x-2">
            <p>Have an account?</p>
            <div className="font-bold hover:text-red">
              <Link to="/login">Login Here</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
