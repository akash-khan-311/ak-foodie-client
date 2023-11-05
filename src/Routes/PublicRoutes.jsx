import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddFood from "../Pages/AddFood/AddFood";
import AvailableFood from "../Pages/AvailableFood/AvailableFood";
import ManageFood from "../Pages/ManageFood/ManageFood";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/availablefood", element: <AvailableFood /> },
      { path: "/addfood", element: <AddFood /> },
      { path: "/managefood", element: <ManageFood /> },
      { path: "/foodrequest", element: <ManageFood /> },
      { path: "/login", element: <Login /> },
      {
        path: "/foodDetails/:id",
        element: <FoodDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/api/v1/food/${params.id}`),
      },
      { path: "/register", element: <Register /> },
    ],
  },
]);

export default Router;
