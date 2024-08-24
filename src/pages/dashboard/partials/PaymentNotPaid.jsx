import React from "react";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PaymentNotPaid = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white flex w-full justify-center">
      <div className="w-[90%] flex justify-between p-5 rounded-3xl bg-red-700 items-center">
        <div className="flex space-x-5">
          <div>
            <MdCancel className="text-white" size={30} />
          </div>
          <div>
            <h4 className="text-[20px] font-bold">
              We haven't received your payment yet. Please make your payment
              soon!
            </h4>
          </div>
        </div>
        <div>
          <button className="text-black bg-white px-6 font-bold py-2 rounded-xl hover:bg-red-800" onClick={() => navigate("/payment")}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentNotPaid;
