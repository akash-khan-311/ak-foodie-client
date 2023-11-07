import React, { useEffect, useState } from "react";
import Headroom from "react-headroom";
import Header from "../../Shared/Header/Header";

import Table from "../../components/Table/Table";
import { Helmet } from "react-helmet";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const ManageFood = () => {
  const { user } = useAuth();
  const [myFoods, setMyFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  const url = `/myfood?email=${user?.email}`;

  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setMyFoods(res.data);
    });
  }, [user]);

  return (
    <div>
      <Helmet>
        <title>Manage Food</title>
      </Helmet>
      <Headroom>
        <Header />
      </Headroom>

      <div className="my-10">
        <Table myFoods={myFoods} />
      </div>
    </div>
  );
};

export default ManageFood;
