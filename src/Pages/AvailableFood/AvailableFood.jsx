import React, { useEffect, useState } from "react";
import Headroom from "react-headroom";
import Header from "../../Shared/Header/Header";
import { useLoaderData } from "react-router-dom";
import AvailableFoodCard from "../../components/AvailableFoodCard/AvailableFoodCard";

import { Button, Input } from "@material-tailwind/react";

const AvailableFood = () => {
  const availableFoods = useLoaderData();
  const [filteredData, setFilteredData] = useState(availableFoods);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setFilteredData(availableFoods);
  }, [availableFoods]);

  const handleSearch = (search) => {
    setSearchValue(search);

    const result = availableFoods.filter((food) =>
      food.foodName
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase())
    );
    setFilteredData(result);
  };
  console.log(filteredData);
  return (
    <div>
      <Headroom>
        <Header />
      </Headroom>

      <div className="container mx-auto">
        <div>
          <div className="relative flex w-full gap-2 mt-10 border-b-4 border-orange-700 pb-5">
            <Input
              type="search"
              onChange={(e) => handleSearch(e.target.value)}
              color="white"
              label="Type here..."
              className="pr-20"
              containerProps={{
                className: "min-w-[288px]",
              }}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {filteredData.map((food) => (
            <AvailableFoodCard food={food} key={food._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableFood;
