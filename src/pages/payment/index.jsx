import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Background from "../../assets/videos/RedFlareBackground.mp4";
import { GetUserById, RegisterEvent } from "../../services/userService";
import { toast } from "react-toastify";
import { BsQuestionCircle } from "react-icons/bs";
import ShowLanyard from "./modals/ShowLanyard";
import ShowProfile from "./modals/ShowProfile";

const Payment = () => {
  const location = useLocation();
  const { ticketType, price: ticketPrice } = location.state || {};
  const lanyardPrice = 20000;
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);
  const [addLanyard, setAddLanyard] = useState(false);
  const [totalPrice, setTotalPrice] = useState(ticketPrice || 0);

  const [user, setUser] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await GetUserById();
        if (res.user.phone == null) {
          setShowProfile(true);
          console.log("masuk");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const handleLanyardChange = () => {
    setAddLanyard(!addLanyard);
    setTotalPrice(!addLanyard ? ticketPrice + lanyardPrice : ticketPrice);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info("Registering event...");

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("price", totalPrice);
    formData.append("additional", addLanyard ? 1 : 0);

    try {
      const response = await RegisterEvent(formData);
      toast.success("Event registered successfully!");
      navigate("/dashboard");
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Failed to register event");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white space-y-6 mt-10 relative">
      <video
        src={Background}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="p-6 md:p-10 rounded-3xl z-10 bg-black bg-opacity-80 backdrop-blur-lg max-w-md md:max-w-2xl lg:max-w-3xl">
        <div className="space-y-6">
          <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
            Reserve Your Spot Today!
          </h1>
          <p className="text-sm md:text-base lg:text-lg">
            Complete your payment by transferring to the account details below.
          </p>
          <div className="text-sm md:text-base lg:text-lg">
            <p>Bank Name: GoPay</p>
            <p>Account Holder: Cikal Kholifiyanti</p>
            <p>Account Number: 088226435948</p>
            <p className="font-bold">
              Ticket Price: Rp. {ticketPrice.toLocaleString("id-ID")}
            </p>
          </div>
          <div className="space-y-2">
            <label className="flex items-center text-sm md:text-base lg:text-lg">
              <input
                type="checkbox"
                checked={addLanyard}
                onChange={handleLanyardChange}
                className="appearance-none h-4 w-4 bg-black border border-red-500 checked:bg-red-700 checked:border-red-700 focus:outline-none mr-2"
              />
              <span className="flex items-center gap-2">
                Add exclusive TEDx UNS lanyard? (+Rp.{" "}
                {lanyardPrice.toLocaleString("id-ID")})
                <BsQuestionCircle
                  className="text-[#bfbfbf] cursor-pointer hover:text-red"
                  onClick={() => setShowModal(true)}
                />
              </span>
            </label>
          </div>
          <div className="font-bold text-lg md:text-xl lg:text-2xl">
            Total Amount: Rp. {totalPrice.toLocaleString("id-ID")}
          </div>
          <p className="text-sm md:text-base lg:text-lg">
            Please upload your payment receipt for confirmation.
          </p>
          <div className="space-y-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="block text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-red-700 file:text-white
                hover:file:bg-red-800"
            />
          </div>
          <h5 className="text-red text-[12px]">
            * Maximum upload size is 2MB, and the file must be an image (jpg,
            jpeg, png).
          </h5>
          <div className="flex justify-center">
            <button
              className={`text-white bg-red-700 px-8 py-2 rounded-xl hover:bg-red-800 mt-2 ${
                !selectedFile ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!selectedFile}
              onClick={handleSubmit}
            >
              Submit Proof of Payment
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <ShowLanyard
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
      {showProfile && (
        <ShowProfile
          isVisible={showProfile}
          onClose={() => setShowProfile(false)}
        />
      )}
    </div>
  );
};

export default Payment;
