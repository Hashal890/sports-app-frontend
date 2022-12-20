import React from "react";
import { Route, Routes } from "react-router-dom";
import EventDetails from "./EventDetails.routes";
import EventsList from "./EventsList.routes";
import Home from "./Home.routes";
import Login from "./Login.routes";
import MyEvents from "./MyEvents.routes";
import Register from "./Register.routes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Register />} />
      <Route path={"/myevents"} element={<MyEvents />} />
      <Route path={"/list"} element={<EventsList />} />
      <Route path={"/event/:id"} element={<EventDetails />} />
    </Routes>
  );
};

export default AllRoutes;
