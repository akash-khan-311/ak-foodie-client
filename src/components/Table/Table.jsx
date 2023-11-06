import React from "react";
import { useMemo } from "react";
import { useTable } from "react-table";
import "./Table.css";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Table = ({ myFoods }) => {
  const data = useMemo(() => myFoods, [myFoods]);

  const columns = useMemo(
    () => [
      {
        Header: "Food Name",
        accessor: "foodName",
      },
      {
        Header: "Pickup Location",
        accessor: "pickupLocation",
      },
      {
        Header: "Quantity",
        accessor: "quantity",
      },
      {
        Header: "Expired Date",
        accessor: "expiredDate",
      },
      {
        Header: "Edit",

        Cell: ({ cell }) => (
          <Button
            variant="gradient"
            size="sm"
            onClick={() => handleStatusClick(cell.row.original.status)}
          >
            Edit
          </Button>
        ),
      },
      {
        Header: "Delete",

        Cell: ({ cell }) => (
          <Button
            variant="gradient"
            size="sm"
            className="bg-gradient-to-tr from-red-600 to-red-400"
            onClick={() => handleStatusClick(cell.row.original.status)}
          >
            Delete
          </Button>
        ),
      },
      {
        Header: "Manage",

        Cell: ({ cell }) => (
          <Link to={"/"}>
            <Button
              className="bg-gradient-to-tr from-orange-600 to-orange-400"
              variant="gradient"
              size="sm"
              onClick={() => handleStatusClick(cell.row.original._id)}
            >
              Manage
            </Button>
          </Link>
        ),
      },
    ],
    [data]
  );
  const handleStatusClick = (remove) => {
    console.log(remove);
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div>
      <div className="container mx-auto table-container">
        {myFoods.length ? (
          <>
            <table
              className="backdrop-blur-3xl bg-white/5"
              {...getTableProps()}
            >
              <thead className="bg-orange-700">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        className="bg-orange-700"
                        {...column.getHeaderProps()}
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        ) : (
          <div className="">
            <div className="backdrop-blur-2xl bg-white/20 rounded-2xl py-10 flex items-center justify-center ">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-center text-white font-bold">
                No Food Added
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
