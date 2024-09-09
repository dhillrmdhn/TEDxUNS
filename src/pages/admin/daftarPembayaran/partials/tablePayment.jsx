import React from "react";
import { Participants } from "../../../../data/participants";
import Table from "../../../../utils/Table";
import RedButton from "../../../../components/button/RedButton";
import WhiteButton from "../../../../components/button/WhiteButton";

const TablePayment = () => {
  const columns = [
    { Header: "Nama", accessor: "name" },
    { Header: "Email", accessor: "email" },
    { Header: "Payment Status", accessor: "paymentStatus" },
    { Header: "Action", accessor: "action" },
  ];

  const data = Participants;

  // Fungsi filter yang juga menambahkan action berdasarkan status
  const filterData = ({ status }) => {
    const filteredData = data
      .filter((item) => item.paymentStatus === status)
      .map((item) => ({
        ...item,
        action: getActionButtons(item.paymentStatus), // menambahkan action sesuai status
      }));
    return filteredData;
  };

  // Fungsi untuk menentukan action berdasarkan paymentStatus
  const getActionButtons = (status) => {
    switch (status) {
      case "Waiting":
        return (
          <div className="space-x-2">
            <RedButton onClick={() => handleConfirm(item.id)}>
              Confirm
            </RedButton>
            <WhiteButton onClick={() => handleViewProof(item.id)}>
              View Proof
            </WhiteButton>
          </div>
        );
      case "Paid":
        return (
          <RedButton onClick={() => handleCancelPayment(item.id)}>
            Cancel Payment
          </RedButton>
        );
      case "-":
        return (
          <RedButton onClick={() => handleRemoveAccount(item.id)}>
            Remove Account
          </RedButton>
        );
      default:
        return null;
    }
  };

  const handleConfirm = (id) => {
    console.log(`Confirm payment for ID: ${id}`);
  };

  const handleViewProof = (id) => {
    console.log(`View proof of payment for ID: ${id}`);
  };

  const handleCancelPayment = (id) => {
    console.log(`Cancel payment for ID: ${id}`);
  };

  const handleRemoveAccount = (id) => {
    console.log(`Remove account for ID: ${id}`);
  };

  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-[25px] font-bold mb-2">Waiting for Verification</h3>
        <Table columns={columns} data={filterData({ status: "Waiting" })} />
      </div>
      <div>
        <h3 className="text-[25px] font-bold mb-2">Paid</h3>
        <Table columns={columns} data={filterData({ status: "Paid" })} />
      </div>
      <div>
        <h3 className="text-[25px] font-bold mb-2">Waiting for Payment</h3>
        <Table columns={columns} data={filterData({ status: "-" })} />
      </div>
    </div>
  );
};

export default TablePayment;
