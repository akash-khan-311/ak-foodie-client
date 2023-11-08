import React, { useEffect, useState } from "react";
import Headroom from "react-headroom";
import Header from "../../Shared/Header/Header";
import { useLoaderData } from "react-router-dom";
import AvailableFoodCard from "../../components/AvailableFoodCard/AvailableFoodCard";

import { Button, Input } from "@material-tailwind/react";
import { Helmet } from "react-helmet";

const AvailableFood = () => {
  const availableFoods = useLoaderData();
  const [filteredData, setFilteredData] = useState(availableFoods);
  const [searchValue, setSearchValue] = useState("");
  const [ascending, setAscending] = useState(true);

  useEffect(() => {
    setFilteredData(availableFoods);
  }, [availableFoods]);

  const handleSearch = (search) => {
   

    const result = availableFoods.filter((food) =>
      food.foodName
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase())
    );
    setFilteredData(result);
  };

  const handleSortByExpiredDate = () => {
    const sortedData = [...filteredData]; // Create a copy to avoid mutating the original array
    sortedData.sort((a, b) => {
      const dateA = new Date(a.expiredDate);
      const dateB = new Date(b.expiredDate);
      return ascending ? dateA - dateB : dateB - dateA;
    });

    setFilteredData(sortedData);
    setAscending(!ascending);
  };

  return (
    <div>
      <Helmet>
        <title>Available Foods</title>
      </Helmet>
      <Headroom>
        <Header />
      </Headroom>

      <div className="container mx-auto px-3 md:px-0">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="backdrop-blur-xl bg-white/10 p-8 mt-10 rounded-3xl"
          >
            <div className="relative flex w-full gap-2  border-b-4 border-orange-700 pb-5 ">
              <Input
                type="search"
                onChange={(e) => setSearchValue(e.target.value)}
                color="white"
                label="Type here..."
                className="pr-20"
              />
              <Button
                size="sm"
                color="white"
                onClick={() => handleSearch(searchValue)}
                className="!absolute right-1 top-1 rounded"
              >
                Search
              </Button>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="text-white "
          >
            <Button
              onClick={handleSortByExpiredDate}
              className="bg-gradient-to-tr  from-orange-600 to-orange-800"
              size="sm"
            >
              sort by expired date
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 ">
          {filteredData?.map((food) => (
            <AvailableFoodCard food={food} key={food._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableFood;
