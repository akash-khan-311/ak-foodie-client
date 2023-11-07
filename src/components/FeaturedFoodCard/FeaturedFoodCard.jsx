import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const FeaturedFoodCard = ({ food }) => {
  const {
    foodName,
    foodImg,
    donatorName,
    donatorImg,
    pickupLocation,
    expiredDate,
    quantity,
    aditionalNotes,
    _id,
  } = food;
  const newQuantity = parseInt(quantity);
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="relative flex  flex-col rounded-xl backdrop-blur-md bg-white/10 bg-clip-border text-white shadow-md"
      >
        <div className="relative h-72 overflow-hidden  bg-transparent rounded shadow-none bg-clip-border">
          <img
            src={foodImg}
            className="h-full w-full"
            alt="ui/ux review check"
          />
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal border-b-2 border-orange-700">
            {foodName.toUpperCase()}
          </h4>
          <div className="block mt-3 font-sans  antialiased font-normal leading-relaxed ">
            <div className="flex items-center justify-between border-b-2 pb-3 border-orange-700">
              <h1 className="text-white text-lg">{donatorName}</h1>
              <img className="w-10 h-10 rounded-full" src={donatorImg} alt="" />
            </div>
            <div className="my-3">
              <ul className="text-sm list-disc list-inside space-y-2">
                <li className="">
                  <span className="font-bold text-orange-700">Pickup</span>:{" "}
                  {pickupLocation}
                </li>
                <li className="">
                  <span className="font-bold text-orange-700">Expired</span>:{" "}
                  {expiredDate}
                </li>
                <li className="">
                  <span className="font-bold text-orange-700">Quantity</span>:{" "}
                  {parseInt(newQuantity)}
                </li>
              </ul>
            </div>
            <p className="">
              <span className="font-bold text-orange-700">Notes</span>:{" "}
              {aditionalNotes}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between p-6">
          <Link to={`/foodDetails/${_id}`} className="w-full">
            <Button
              size="sm"
              className="bg-gradient-to-tr from-orange-600 to-orange-400 w-full"
            >
              View Detail
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFoodCard;
