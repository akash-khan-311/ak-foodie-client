import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
