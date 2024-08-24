import React from "react";
import InputText from "../../components/input/inputText";

const Payment = () => {
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
          <div>
            <InputText>Please provide proof of payment.</InputText>
          </div>
          <div>
            <button className="text-white bg-red-700 px-8 py-2 rounded-xl hover:bg-red-800 mt-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
