import React from "react";
import { IoAlertCircle } from "react-icons/io5";

const PaymentWaiting = () => {
  return (
    <div className="text-white flex w-full justify-center">
      <div className="w-[90%] flex space-x-5 p-5 rounded-3xl bg-gray-600">
        <div className="flex space-x-5">
          <div>
            <IoAlertCircle className="text-white" size={30} />
          </div>
          <div>
            <h4 className="text-[20px] font-bold">
              Payment is still awaiting confirmation.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentWaiting;
