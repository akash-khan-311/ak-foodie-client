import axios from "axios";
import React, { useEffect, useState } from "react";
import FeaturedFoodCard from "../../../components/FeaturedFoodCard/FeaturedFoodCard";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const FeaturedFood = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/v1/featuredfoods").then((res) => {
      setFoods(res.data);
    });
  }, []);

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-white my-10">
        <span className="border-b-2 md:border-b-4 lg:border-b-8 border-orange-700">
          Featured
        </span>
        <span className="text-orange-700 "> Food</span>
      </h2>

      <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-10 px-3 md:px-0">
        {foods.map((food) => (
          <FeaturedFoodCard key={food._id} food={food} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link href="#availablefood" to={"/availablefood"}>
          <Button className="bg-gradient-to-tr  from-orange-600 to-orange-800">
            See All food
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedFood;
