import React, { useEffect, useState } from "react";
import Table from "../../../../utils/Table";
import { GetAllUsers } from "../../../../services/adminService";
import { toast } from "react-toastify";

const TableMember = () => {
  const columns = [
    { Header: "Nama", accessor: "fullname" },
    { Header: "Email", accessor: "email" },
    { Header: "Status", accessor: "status" },
    { Header: "Payment Status", accessor: "paymentStatus" },
    { Header: "Presensi", accessor: "presence" },
  ];

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    toast.info("Getting Data...");
    const getData = async () => {
      try {
        const response = await GetAllUsers();
        const users = response.user
          .filter((user) => user.role?.id !== 1)
          .map((user) => ({
            fullname: user.fullname,
            email: user.email,
            status: user.payment == null ? "Account" : "Participants",
            paymentStatus: user.payment
              ? user.payment.status === 1
                ? "Paid"
                : user.payment.status === 2
                ? "Declined"
                : "Need Confirmation"
              : "-",
            presence: user.presence ? "Present" : "Absent",
          }));
        setData(users);
        toast.dismiss();
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const filteredData = data.filter((item) =>
    item.fullname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortColumn) return 0;
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (sortDirection === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-col">
      <Table columns={columns} data={sortedData} onSort={handleSort} />
    </div>
  );
};

export default TableMember;
