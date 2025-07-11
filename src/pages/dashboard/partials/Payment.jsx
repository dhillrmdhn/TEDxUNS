import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Payment = () => {
  return (
    <div className="text-white flex w-full justify-center">
      <div className="w-[90%] flex items-center space-x-5 p-5 rounded-3xl bg-green-500">
        <div>
          <FaCheckCircle className="text-white" size={30} />
        </div>
        <div>
          <h4 className="text-[20px] font-bold">We have received your payment. Stay tuned for the big day!</h4>
        </div>
      </div>
    </div>
  );
};

export default Payment;
