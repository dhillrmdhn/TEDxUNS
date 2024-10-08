import React, { useState } from "react";
import Background from "../../assets/videos/RedFlareBackground.mp4";

const Payment = () => {
  const ticketPrice = 100000;
  const lanyardPrice = 20000;

  const [selectedFile, setSelectedFile] = useState(null);
  const [addLanyard, setAddLanyard] = useState(false);
  const [totalPrice, setTotalPrice] = useState(ticketPrice);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleLanyardChange = () => {
    setAddLanyard(!addLanyard);
    setTotalPrice(!addLanyard ? ticketPrice + lanyardPrice : ticketPrice);
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
            <p>Bank Name: BNI</p>
            <p>Account Holder: TEDx UNS</p>
            <p>Account Number: 123456789</p>
            <p className="font-bold">
              Ticket Price: Rp. {ticketPrice.toLocaleString("id-ID")}
            </p>
          </div>

          {/* Lanyard Option */}
          <div className="space-y-2">
            <label className="flex items-center text-sm md:text-base lg:text-lg">
              <input
                type="checkbox"
                checked={addLanyard}
                onChange={handleLanyardChange}
                className="appearance-none h-4 w-4 bg-black border border-red-500 checked:bg-red-700 checked:border-red-700 focus:outline-none mr-2"
              />
              <span>
                Add exclusive TEDx UNS lanyard? (+Rp.{" "}
                {lanyardPrice.toLocaleString("id-ID")})
              </span>
            </label>
          </div>

          {/* Total Amount */}
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

          <div className="flex justify-center">
            <button
              className={`text-white bg-red-700 px-8 py-2 rounded-xl hover:bg-red-800 mt-2 ${
                !selectedFile ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!selectedFile}
            >
              Submit Proof of Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
