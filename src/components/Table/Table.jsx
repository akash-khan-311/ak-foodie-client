import React from "react";
import { useMemo } from "react";
import { useTable } from "react-table";
import "./Table.css";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";

import Swal from "sweetalert2";
import { useEffect } from "react";

const Table = ({ myFoods }) => {
  const [displayMyFoods, setDisplayMyFoods] = useState(myFoods);
  const data = useMemo(() => displayMyFoods, [displayMyFoods]);


  const handleRemove = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/api/v1/deleted/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingManageFoods = myFoods.filter(
                (food) => food._id !== _id
              );
              setDisplayMyFoods(remainingManageFoods);

              // setDisplayMyFoods(remainingManageFoods);
              Swal.fire({
                title: "Deleted!",
                text: "Food Has Been Deleted!",
                icon: "success",
              });
            }
          });
      }
    });
  };


  
    useEffect(() => {
      setDisplayMyFoods(myFoods);
    }, [myFoods]);
    console.log(displayMyFoods);
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
            onClick={() => handleRemove(cell.row.original.status)}
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
            onClick={() => handleRemove(cell.row.original._id)}
          >
            Delete
          </Button>
        ),
      },
      {
        Header: "Manage",

        Cell: ({ cell }) => (
          <Link to={`/manage/${cell.row.original._id}`}>
            <Button
              className="bg-gradient-to-tr from-orange-600 to-orange-400"
              variant="gradient"
              size="sm"
            >
              Manage
            </Button>
          </Link>
        ),
      },
    ],
    [data]
  );

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
                You have not donated any food
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
