import React from "react";
import Headroom from "react-headroom";
import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";

const ManageSingleFood = () => {
  const manageSingleFood = useLoaderData();
  return (
    <div>
      <Headroom>
        <Header />
      </Headroom>

      <div className="container mx-auto my-10">
        
      </div>
    </div>
  );
};

export default ManageSingleFood;
