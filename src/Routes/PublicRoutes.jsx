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
import PrivateRoute from "./PrivateRoute";
import FoodRequest from "../Pages/FoodRequest/FoodRequest";
import ManageSingleFood from "../components/ManageSingleFood/ManageSingleFood";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/availablefood",
        element: <AvailableFood />,
        loader: () => fetch("http://localhost:3000/api/v1/availablefoods"),
      },
      {
        path: "/addfood",
        element: (
          <PrivateRoute>
            {" "}
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/managefood",
        element: (
          <PrivateRoute>
            {" "}
            <ManageFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/foodrequest",
        element: (
          <PrivateRoute>
            <FoodRequest />
          </PrivateRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      {
        path: "/foodDetails/:id",
        element: (
          <PrivateRoute>
            <FoodDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/api/v1/food/${params.id}`),
      },
      {
        path: "/manage/:id",
        element: (
          <PrivateRoute>
            <ManageSingleFood />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/api/v1/manage/${params.id}`),
      },
      { path: "/register", element: <Register /> },
    ],
  },
]);

export default Router;
