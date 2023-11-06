import React, { useContext, useEffect, useState } from "react";
import Headroom from "react-headroom";
import Header from "../../Shared/Header/Header";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const FoodRequest = () => {
  const [requestedFoods, setRequestedFoods] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user.email;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/requestfood/${email}`)
      .then((res) => {
        setRequestedFoods(res.data);
      });
  }, []);
  console.log(requestedFoods);
  return (
    <div>
      <Headroom>
        <Header />
      </Headroom>
      <div className="container mx-auto my-10">
        <div classname="my-10 container mx-auto">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left ">
              <thead className="text-xs  bg-gradient-to-tr from-orange-700 to-orange-900 uppercase   ">
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
                  <>
                    <tr key={food._id} className=" border-b ">
                      <th scope="row" className="px-6 py-4  whitespace-nowrap ">
                        {food.foodName}
                      </th>
                      <td className="px-6 py-4">{food.quantity}</td>
                      <td className="px-6 py-4">{food.donatorName}</td>
                      <td className="px-6 py-4">{food.expiredDate}</td>
                      <td className="px-6 py-4">{food.requestDate}</td>
                      <td className="px-6 py-4">${food.donationMoney}</td>
                      <td className="px-6 py-4">{food.status}</td>
                      <td className="px-6 py-4 text-right">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodRequest;
