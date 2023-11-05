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

const FoodDetails = () => {
  const food = useLoaderData();
  const {
    foodName,
    foodImg,
    donatorName,
    donatorImg,
    pickupLocation,
    expiredDate,
    quantity,
    aditionalNotes,
  } = food;

  const [year, month, day] = expiredDate.split("-");
  const newExpiredDate = `${day}-${month}-${year}`;
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);
  return (
    <div>
      <Headroom>
        <Header />
      </Headroom>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center my-10 mx-auto text-white border-b-2 border-orange-700">
          Details Of <span className="text-orange-700">{foodName}</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-10 px-3 md:px-0">
          {/* donar info */}
          <div className="w-[400px] text-white backdrop-blur-md bg-white/10 p-8 rounded">
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
              data-ripple-light="true"
              data-dialog-target="dialog-lg"
              className="bg-gradient-to-tr from-orange-600 to-orange-400 w-full"
            >
              Request Food
            </Button>
            <Dialog
              open={
                size === "xs" ||
                size === "sm" ||
                size === "md" ||
                size === "lg" ||
                size === "xl" ||
                size === "xxl"
              }
              size={size || "md"}
              handler={handleOpen}
            >
              <DialogHeader>Its a simple dialog.</DialogHeader>
              <DialogBody>
                The key to more success is to have a lot of pillows. Put it this
                way, it took me twenty five years to get these plants, twenty
                five years of blood sweat and tears, and I&apos;m never giving
                up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={() => handleOpen(null)}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button
                  variant="gradient"
                  color="green"
                  onClick={() => handleOpen(null)}
                >
                  <span>Confirm</span>
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
