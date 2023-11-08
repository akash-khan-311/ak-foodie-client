import React, { useContext, useEffect, useState } from "react";
import Headroom from "react-headroom";
import Header from "../../Shared/Header/Header";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Button } from "@material-tailwind/react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const FoodRequest = () => {
  const [requestedFoods, setRequestedFoods] = useState([]);
  const { user } = useContext(AuthContext);

  const email = user.email;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/requestfood/${email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setRequestedFoods(res.data);
      });

    // fetch(`http://localhost:3000/api/v1/requestfood/${email}`, {
    //   credentials: 'include',
    // })
    //   .then((res) => res.json())
    //   .then((data) => setRequestedFoods(data));
  }, []);

  const handleCancelFood = (food) => {
    console.log(food);

    const {
      requesterDonate,
      requesterNotes,
      requesterName,
      requesterImg,
      requesterEmail,
      requestDate,
      requested,
      _id,
    } = food;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/api/v1/updated/${_id}`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            requesterDonate,
            requesterNotes,
            requesterName,
            requesterImg,
            requesterEmail,
            requestDate,
            requested,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Canceled!",
                text: "Food Request Has Been Cancelled!",
                icon: "success",
              });

              const remainingFoodRequest = requestedFoods.filter(
                (food) => food._id !== _id
              );

              setRequestedFoods(remainingFoodRequest);
            }
          });
      }
    });
  };
  const isAvailable = (status) => status === "available";

  return (
    <div>
      <Helmet>
        <title>My Food Request</title>
      </Helmet>
      <Headroom>
        <Header />
      </Headroom>
      <div className="container mx-auto my-10">
        <div className="my-10 container mx-auto">
          {requestedFoods.length > 0 ? (
            <div className="relative overflow-x-hidden  sm:rounded-lg">
              <table className="w-full text-sm text-left ">
                <thead className="text-xs   bg-gradient-to-tr from-orange-700 to-orange-900 uppercase  ">
                  <tr>
                    <th scope="col" className="px-6 py-3 ">
                      Food Name
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Donator Name
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Pickup Location
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      Expired Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Request Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Donation Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {requestedFoods.map((food) => (
                    <tr
                      key={food._id}
                      className=" border-b backdrop-blur-sm bg-white/20"
                    >
                      <th scope="row" className="px-6 py-4  whitespace-nowrap ">
                        {food.foodName}
                      </th>
                      <td className="px-6 py-4">{food.donatorName}</td>
                      <td className="px-6 py-4">{food.pickupLocation}</td>
                      <td className="px-6 py-4">{food.expiredDate}</td>
                      <td className="px-6 py-4">{food.requestDate}</td>
                      <td className="px-6 py-4">${food.requesterDonate}</td>
                      <td className="px-6 py-4 text-green-200 font-bold">
                        {food.status.toUpperCase()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <Button
                          onClick={() => handleCancelFood(food)}
                          disabled={!isAvailable(food.status)}
                          className="font-medium text-white  bg-red-500"
                        >
                          Cancel
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              <div className="backdrop-blur-2xl bg-white/20 rounded-2xl py-10 flex items-center justify-center  ">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-center text-white font-bold">
                  You have not requested any food yet
                </h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodRequest;
