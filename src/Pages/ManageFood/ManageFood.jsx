import React, { useContext, useEffect, useState } from "react";
import Headroom from "react-headroom";
import Header from "../../Shared/Header/Header";

import { AuthContext } from "../../AuthProvider/AuthProvider";
import Table from "../../components/Table/Table";

const ManageFood = () => {
  const { user } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/myfood?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyFoods(data));
  }, [user]);
console.log(myFoods)
  return (
    <div>
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
