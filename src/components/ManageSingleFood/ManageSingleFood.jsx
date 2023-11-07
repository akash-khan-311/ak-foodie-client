import React, { useState } from "react";
import Headroom from "react-headroom";
import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import { Button, Option, Select } from "@material-tailwind/react";

const ManageSingleFood = () => {
  const manageSingleFood = useLoaderData();
  const [selectedValue, setSelectedValue] = useState("");
  const {
    foodName,
    foodImg,
    donatorName,
    donationMoney,
    donatorImg,
    pickupLocation,
    expiredDate,
    quantity,
    aditionalNotes,
    status,
  } = manageSingleFood;
  const [year, month, day] = expiredDate.split("-");
  const newExpiredDate = `${day}-${month}-${year}`;

  const handleSelect = (e) => {
    setSelectedValue(e.target.value);
  };
  console.log(selectedValue)
  return (
    <div>
      <Headroom>
        <Header />
      </Headroom>

      <div className="container mx-auto my-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center my-10 mx-auto text-white border-b-2 border-orange-700">
          Details Of <span className="text-orange-700">{foodName}</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-10 px-3 md:px-0">
          {/* donar info */}
          <div className="lg:w-[400px] text-white backdrop-blur-md bg-white/10 p-8 rounded">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold border-b-4 border-orange-700">
              Requester Information
            </h2>

            <div className="space-y-3 my-10">
              <img src={donatorImg} className="w-40 h-40 rounded-lg" alt="" />
              <div className="space-y-3">
                <h2 className="text-lg md:text-xl lg:text-2xl">
                  <span className="text-orange-700">Name</span>: {donatorName}
                </h2>
                <h2 className="text-lg md:text-xl lg:text-2xl">
                  <span className="text-orange-700">Pickup Location</span>:{" "}
                  {pickupLocation}
                </h2>

                <h2 className="text-lg md:text-xl lg:text-2xl">
                  <span className="text-orange-700">Note</span>:{" "}
                  {aditionalNotes}
                </h2>
              </div>
            </div>
          </div>
          {/* Food Info */}
          <div className="text-white flex-1 backdrop-blur-md bg-white/10 p-8 rounded">
            <div className=" ">
              <img
                src={foodImg}
                className="w-full h-72 rounded-lg mx-auto"
                alt=""
              />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center border-b-4 border-orange-700">
                {foodName}
              </h2>
            </div>
            <div>
              <ul className="list-inside list-disc my-10">
                <li className="text-lg md:text-xl lg:text-2xl">
                  Food Quantity : {quantity}
                </li>
                <li className="text-lg md:text-xl lg:text-2xl">
                  Expired On: {newExpiredDate}
                </li>

                <div className="mt-10">
                  <div>
                    <label
                      htmlFor="countries"
                      className="block mb-2  font-medium text-white text-xl"
                    >
                      Food Status
                    </label>
                    <select
                    onChange={handleSelect}
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value={status}>
                        {status}
                      </option>
                      <option value="delivered">delivered </option>
                    </select>
                  </div>
                </div>
              </ul>
            </div>
            <Button
              onClick={() => handleOpen("xl")}
              className="bg-gradient-to-tr from-orange-600 to-orange-400 w-full"
            >
              Request Food
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSingleFood;
