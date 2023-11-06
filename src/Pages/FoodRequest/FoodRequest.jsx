import React from "react";
import Headroom from "react-headroom";
import Header from "../../Shared/Header/Header";

const FoodRequest = () => {
  return (
    <div>
      <Headroom>
        <Header />
      </Headroom>
      <div className="my-10"></div>
    </div>
  );
};

export default FoodRequest;
