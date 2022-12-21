import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import EventDetails from "./EventDetails.routes";
import EventsList from "./EventsList.routes";
import Home from "./Home.routes";
import Login from "./Login.routes";
import MyEvents from "./MyEvents.routes";
import Register from "./Register.routes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Register />} />
      <Route
        path={"/myevents"}
        element={
          <PrivateRoute>
            <MyEvents />
          </PrivateRoute>
        }
      />
      <Route
        path={"/list"}
        element={
          <PrivateRoute>
            <EventsList />
          </PrivateRoute>
        }
      />
      <Route
        path={"/event/:id"}
        element={
          <PrivateRoute>
            <EventDetails />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
