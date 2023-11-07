import React from "react";
import Banner from "../Banner/Banner";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import { Helmet } from "react-helmet";
import LatestNews from "../LatestNews/LatestNews";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <FeaturedFood />
      <LatestNews />
    </div>
  );
};

export default Home;
