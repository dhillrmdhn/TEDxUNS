import React, { useState } from "react";

const Payment = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white space-y-6 bg-gradient-to-r from-black from-70% to-red-800">
      <div className="border-2 border-red-700 p-10 rounded-3xl">
        <div className="space-y-6">
          <h1 className="text-h3 font-bold text-center">Payment Section</h1>
          <p>To make a payment, please transfer to the following account.</p>
          <div>
            <p>Bank Name : BNI</p>
            <p>Account Name : TEDx UNS</p>
            <p>Account Number : 123456789</p>
            <p className="font-bold">Amount : Rp. 100.000</p>
          </div>
          <div>Please provide proof of payment.</div>

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
              Submit Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
