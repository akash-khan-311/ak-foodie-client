import React, { useContext, useEffect, useState } from "react";
import Headroom from "react-headroom";
import Header from "../../Shared/Header/Header";
import axios from "axios";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const FoodRequest = () => {
  const [requestedFood, setRequestedFood] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user.email;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/requestfood/${email}`)
      .then((res) => {
        setRequestedFood(res.data);
      });
  }, []);
  return (
    <div>
      <Headroom>
        <Header />
      </Headroom>
      <div className="my-10 container mx-auto">
        <h1 className="text-white">{requestedFood.length}</h1>
      </div>
    </div>
  );
};

export default FoodRequest;
