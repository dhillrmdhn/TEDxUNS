import React, { useEffect, useState } from "react";
import InputText from "../../../components/input/inputText";
import { GetUserById, updateUser } from "../../../services/userService";
import RedButton from "../../../components/button/RedButton";
import { toast } from "react-toastify";

const Profile = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await GetUserById();
        const { password, ...userData } = response.user;
        setData(userData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const inputFields = [
    { name: "fullname", label: "Name", value: data?.fullname },
    { name: "email", label: "Email", value: data?.email },
    { name: "address", label: "Address", value: data?.address },
    {
      name: "phone",
      label: "Phone Number",
      value: data?.phone,
    },
    { name: "datebirth", label: "Born", value: data?.datebirth, type: "date" },
  ];

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info("Updating profile...");

    console.log(data);
    try {
      const response = await updateUser(data);
      if (response) {
        toast.success("Profile updated successfully");

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="text-white flex flex-col items-center justify-center space-y-7 p-4 w-full">
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
              type={field.type}
            >
              {field.label}
            </InputText>
          ))}
          <div className="w-full flex items-end">
            <div className="w-full">
              <RedButton className={"w-full"} onClick={handleSubmit}>
                Save Profile
              </RedButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
