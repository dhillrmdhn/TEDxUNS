import React, { useEffect, useState } from "react";
import Table from "../../../../utils/Table";
import RedButton from "../../../../components/button/RedButton";
import WhiteButton from "../../../../components/button/WhiteButton";
import {
  GetAllUsers,
  PaymentAcceptment,
  PaymentDecline,
} from "../../../../services/adminService";
import { toast } from "react-toastify";
import Modal from "react-modal"; // Pastikan react-modal sudah terinstal

Modal.setAppElement("#root"); // Atur root element untuk aksesibilitas

const TablePayment = () => {
  const columns = [
    { Header: "Nama", accessor: "fullname" },
    { Header: "Email", accessor: "email" },
    { Header: "Payment Status", accessor: "paymentStatus" },
    { Header: "Price", accessor: "price" },
    { Header: "Additional Lanyard", accessor: "additional" },
    { Header: "Action", accessor: "action" },
  ];

  const [data, setData] = useState([]);

  // State untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");

  useEffect(() => {
    toast.info("Getting Data...");
    const getData = async () => {
      try {
        const response = await GetAllUsers();
        const users = response.user.map((user) => ({
          fullname: user.fullname,
          email: user.email,
          paymentStatus: user.payment
            ? user.payment.status === 1
              ? "Paid"
              : user.payment.status === 2
              ? "Declined"
              : "Need Confirmation"
            : "-",
          price: user.payment ? user.payment.price : null,
          additional: user.payment
            ? user.payment.additional
              ? "Yes"
              : "No"
            : null,
          id_payment: user.payment ? user.payment.id : null,
          img: user.payment ? user.payment.img : null,
          id: user.id,
        }));
        setData(users);
        toast.dismiss();
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const filterData = ({ status }) => {
    const filteredData = data
      .filter((item) => item.paymentStatus === status)
      .map((item) => ({
        ...item,
        action: getActionButtons(item),
      }));
    return filteredData;
  };

  const getActionButtons = (item) => {
    switch (item.paymentStatus) {
      case "Need Confirmation":
        return (
          <div className="space-x-2 flex">
            <RedButton onClick={() => handleConfirm(item.id_payment)}>
              Confirm
            </RedButton>
            <RedButton onClick={() => handleCancelPayment(item.id_payment)}>
              Cancel
            </RedButton>
            <WhiteButton onClick={() => handleViewProof(item)}>
              View
            </WhiteButton>
          </div>
        );
      case "Declined":
        return (
          <div className="space-x-2 flex">
            <RedButton onClick={() => handleConfirm(item.id_payment)}>
              Re-Confirm
            </RedButton>
            <WhiteButton onClick={() => handleViewProof(item)}>
              View
            </WhiteButton>
          </div>
        );
      case "Paid":
        return (
          <RedButton onClick={() => handleCancelPayment(item.id_payment)}>
            Cancel
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

  const handleConfirm = async (id_payment) => {
    try {
      const response = await PaymentAcceptment(id_payment);
      if (response) {
        toast.success(`Payment confirmed`);

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        toast.error(`Failed to confirm payment`);
        console.log(`Failed to confirm payment for ID Payment: ${id_payment}`);
      }
    } catch (error) {
      console.log(`Error confirming payment: ${error}`);
    }
  };

  const handleViewProof = (item) => {
    if (item.img) {
      const imageUrl = `https://api.tedxuns.com/proofImage/${item.img}`;
      setModalImageUrl(imageUrl);
      setIsModalOpen(true);
    } else {
      toast.error("No proof image available.");
    }
  };

  const handleCancelPayment = async (id_payment) => {
    try {
      const response = await PaymentDecline(id_payment);
      if (response) {
        toast.success(`Payment canceled`);

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        toast.error(`Failed to cancel payment`);
      }
    } catch (error) {
      console.log(`Error confirming payment: ${error}`);
    }
  };

  const handleRemoveAccount = (id) => {
    console.log(`Remove account for ID: ${id}`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImageUrl("");
  };

  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-[25px] font-bold mb-2">Waiting for Verification</h3>
        <Table
          columns={columns}
          data={filterData({ status: "Need Confirmation" })}
        />
      </div>
      <div>
        <h3 className="text-[25px] font-bold mb-2">Paid</h3>
        <Table columns={columns} data={filterData({ status: "Paid" })} />
      </div>
      <div>
        <h3 className="text-[25px] font-bold mb-2">Declined</h3>
        <Table columns={columns} data={filterData({ status: "Declined" })} />
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Proof of Payment"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded shadow-lg max-w-3xl w-full relative">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
          <h2 className="text-xl mb-4">Proof of Payment</h2>
          <div className="flex justify-center items-center">
            <img
              src={modalImageUrl}
              alt="Proof of Payment"
              className="max-w-full max-h-[80vh] object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/400x300?text=Image+Unavailable";
              }}
            />
          </div>
          <button
            onClick={closeModal}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default TablePayment;
