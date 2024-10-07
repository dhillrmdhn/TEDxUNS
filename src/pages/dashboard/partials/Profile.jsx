import React, { useEffect, useState } from "react";
import InputText from "../../../components/input/inputText";
import { GetUserById } from "../../../services/userService";
import RedButton from "../../../components/button/RedButton";

const Profile = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await GetUserById();
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const inputFields = [
    { name: "name", label: "Name", value: data?.user?.fullname },
    { name: "email", label: "Email", value: data?.user?.email },
    { name: "address", label: "Address", value: data?.user?.address },
    {
      name: "phone_number",
      label: "Phone Number",
      value: data?.user?.phone_number,
    },
    { name: "university", label: "University", value: data?.user?.university },
    { name: "born", label: "Born", value: data?.user?.born },
  ];

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-white flex flex-col items-center justify-center space-y-7 p-4">
      <div>
        <h3 className="text-h3 font-bold text-center">
          Your <span className="text-red-700">Profile</span>
        </h3>
      </div>
      <div className="w-full md:w-[90%] flex flex-col items-center border-2 border-red-700 rounded-3xl p-8 space-y-7">
        <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          {inputFields.map((field) => (
            <InputText
              key={field.name}
              name={field.name}
              label={field.label}
              onChange={handleChange}
              value={field.value}
            >
              {field.label}
            </InputText>
          ))}
        </form>
        <div className="w-full flex justify-center">
          <RedButton>Save Profile</RedButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;
