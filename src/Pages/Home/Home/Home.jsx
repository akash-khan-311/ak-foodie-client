import React from "react";
import Banner from "../Banner/Banner";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <FeaturedFood />
    </div>
  );
};

export default Home;
