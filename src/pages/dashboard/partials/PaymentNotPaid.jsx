import React from "react";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PaymentNotPaid = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white flex w-full justify-center">
      <div className="w-[90%] flex justify-between p-5 rounded-3xl bg-red-700 items-center">
        <div className="flex items-center space-x-5">
          <div>
            <MdCancel className="text-white" size={30} />
          </div>
          <div>
            <h4 className="text-[18px] md:text-[20px] font-bold">
              You're not registered as a participant for the event yet!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentNotPaid;
