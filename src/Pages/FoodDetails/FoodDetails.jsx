import React, { useEffect, useState } from "react";
import Headroom from "react-headroom";

import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import axios from "axios";
import swal from "sweetalert";
import { Helmet } from "react-helmet";
import useAuth from "../../Hooks/useAuth";

const FoodDetails = () => {
  const food = useLoaderData();

  const { user } = useAuth();
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
    email,
    _id,
  } = food;
  console.log(food);
  const [year, month, day] = expiredDate.split("-");
  const newExpiredDate = `${day}-${month}-${year}`;
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);

  const handleRequestFood = (e) => {
    e.preventDefault();
    const form = e.target;

    const donationPrice = form.donationAmount.value;
    const newAditionalNotes = form.notes.value;
    const requestDate = form.requestDate.value;

    const requestFood = {
      requesterDonate: donationPrice,
      requesterNotes: newAditionalNotes,
      requesterName: user?.displayName,
      requesterImg: user?.photoURL,
      requesterEmail: user.email,
      requestDate,
      requested: true,
    };

    axios
      .patch(`http://localhost:3000/api/v1/requestfood/${_id}`, requestFood)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          swal("Good job!", "Food Request Successfully", "success");
          handleOpen(null);
        } else {
          swal("Oops!", " Something went wrong", "error");
        }
      });
  };

  const currentDate = new Date();
  const newDay = currentDate.getDate();
  const newMonth = currentDate.getMonth() + 1;
  const newYear = currentDate.getFullYear();

  const newDateFormate = `${newDay}-${newMonth}-${newYear}`;

  return (
    <div>
      <Helmet>
        <title>{foodName}</title>
      </Helmet>
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
              Donar Information
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
              </ul>
            </div>
            <Button
              onClick={() => handleOpen("xl")}
              className="bg-gradient-to-tr from-orange-600 to-orange-400 w-full"
            >
              Request Food
            </Button>
            <Dialog
              className="backdrop-blur-md bg-white/20 "
              open={size === "xl"}
              size={size || "md"}
              handler={handleOpen}
            >
              <DialogHeader className="text-white">
                More Details Of-
                <span className="text-orange-700"> {foodName}</span>
              </DialogHeader>
              <DialogBody className="">
                <form onSubmit={handleRequestFood}>
                  {/* form name and quantity Row */}
                  <div className="md:flex gap-10 my-5">
                    <div className="form-control w-full md:w-1/2">
                      <div className="relative h-10 w-full min-w-[200px] mb-5 md:mb-0">
                        <input
                          required
                          className="peer  h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder=" "
                          name="Fname"
                          defaultValue={foodName}
                          readOnly
                        />
                        <label className="before:content[' ']  after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Food Name
                        </label>
                      </div>
                    </div>
                    <div className="form-control w-full md:w-1/2">
                      <div className="relative h-10 w-full min-w-[200px] ">
                        <input
                          required
                          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder=" "
                          name="foodImg"
                          defaultValue={foodImg}
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-300 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Food Image Url
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* form name and quantity Row */}
                  <div className="md:flex gap-10 my-5">
                    <div className="form-control w-full md:w-1/2">
                      <div className="relative h-10 w-full min-w-[200px] mb-5 md:mb-0">
                        <input
                          required
                          className="peer  h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder=" "
                          name="date"
                          readOnly
                          defaultValue={newExpiredDate}
                        />
                        <label className="before:content[' ']  after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Expired Date
                        </label>
                      </div>
                    </div>
                    <div className="form-control w-full md:w-1/2">
                      <div className="relative h-10 w-full min-w-[200px] ">
                        <input
                          required
                          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder=" "
                          name="donationAmount"
                          type="number"
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-300 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Donation Amount
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* form supliyer and taste Row */}
                  <div className="md:flex gap-10 my-5">
                    <div className="form-control w-full md:w-1/2">
                      <div className="relative h-10 w-full min-w-[200px]  mb-5 md:mb-0">
                        <input
                          required
                          name="donatorName"
                          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder=" "
                          defaultValue={user?.displayName}
                          readOnly
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-300 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Donator Name
                        </label>
                      </div>
                    </div>
                    <div className="form-control w-full md:w-1/2">
                      <div className="relative h-10 w-full min-w-[200px]">
                        <input
                          required
                          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder=" "
                          name="requestDate"
                          readOnly
                          defaultValue={newDateFormate}
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-300 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Request Date
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* form Row */}
                  <div className="md:flex gap-10 my-5">
                    <div className="form-control w-full md:w-1/2">
                      <div className="relative h-10 w-full min-w-[200px]  mb-5 md:mb-0">
                        <input
                          required
                          type="number"
                          name="quantity"
                          className="peer  h-full w-full  rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder=" "
                          defaultValue={quantity}
                          readOnly
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-300 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Quantity
                        </label>
                      </div>
                    </div>
                    <div className="form-control w-full md:w-1/2">
                      <div className="relative h-10 w-full min-w-[200px]">
                        <input
                          required
                          name="location"
                          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder=" "
                          defaultValue={pickupLocation}
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-300 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Pick Up Location
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* form Row */}
                  <div className="flex gap-10 my-5">
                    <div className="form-control w-full ">
                      <div className="relative h-10 w-full min-w-[200px]">
                        <input
                          required
                          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-300 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder=" "
                          name="notes"
                          type="text"
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-300 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-teal-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-teal-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-teal-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Aditional Notes
                        </label>
                      </div>
                    </div>
                  </div>
                  <Button type="submit" className="w-full" color="orange">
                    Request Food
                  </Button>
                </form>
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="gradient"
                  color="red"
                  onClick={() => handleOpen(null)}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
              </DialogFooter>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
