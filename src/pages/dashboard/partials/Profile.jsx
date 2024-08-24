import React from "react";
import InputText from "../../../components/input/inputText";

const Profile = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center min-h-screen space-y-7">
      <div>
        <h3 className="text-h3 font-bold">
          Your <span className="text-red-700">Profile</span>
        </h3>
      </div>
      <div className="w-[90%] border-2 border-red-700 p-10 rounded-3xl grid grid-cols-2 gap-5">
        <div className="space-y-3">
          <InputText>Name</InputText>
          <InputText>Email</InputText>
          <InputText>Password</InputText>
          <InputText>Address</InputText>
          <div>
            <button className="text-white bg-red-700 px-8 py-2 rounded-xl hover:bg-red-800 mt-5">
              Save
            </button>
          </div>
        </div>
        <div className="space-y-3">
          <InputText>Phone Number</InputText>
          <InputText>University</InputText>
          <InputText>How did you hear about us</InputText>
          <InputText>Born</InputText>
        </div>
      </div>
    </div>
  );
};

export default Profile;
