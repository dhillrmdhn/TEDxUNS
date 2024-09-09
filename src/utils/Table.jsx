import React from "react";

const Table = ({ columns, data, onSort }) => {
  return (
    <div className="overflow-x-auto rounded-t-xl">
      <table className="min-w-full">
        <thead className="bg-red-700">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="p-6 text-left text-white cursor-pointer hover:bg-red-800 transition duration-300"
                onClick={() => onSort(column.accessor)}
              >
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-red-500">
              {columns.map((column) => (
                <td key={column.accessor} className="py-4 px-6 text-white">
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
