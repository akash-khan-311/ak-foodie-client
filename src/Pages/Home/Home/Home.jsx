import React from "react";
import Banner from "../Banner/Banner";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import { Helmet } from "react-helmet";
import LatestNews from "../LatestNews/LatestNews";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <FeaturedFood />
      <LatestNews />
      <Contact />
    </div>
  );
};

export default Home;
