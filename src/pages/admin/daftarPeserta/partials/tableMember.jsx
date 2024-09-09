import React, { useState } from "react";
import Table from "../../../../utils/Table";
import { Participants } from "../../../../data/participants";

const TableMember = () => {
  const columns = [
    { Header: "Nama", accessor: "name" },
    { Header: "Email", accessor: "email" },
    { Header: "Status", accessor: "status" },
    { Header: "Payment Status", accessor: "paymentStatus" },
    { Header: "Presensi", accessor: "presensi" },
  ];
  const data = Participants;

  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
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
