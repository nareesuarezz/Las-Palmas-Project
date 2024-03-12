import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { NavBar } from "../../Components/Navbar/navbar";
import "./Show.scss";
import { AvailableTrips } from "../../Components/AvailableTrips/AvailableTrips";
export const Show = () => {
  return (
    <>
      <div className="top">
        <NavLink to="/Choose">
          <IoIosArrowBack className="icon" />
        </NavLink>
        <NavBar></NavBar>
      </div>
      <section className="Trips">
        <h1>Available Trips</h1>
        <AvailableTrips></AvailableTrips>
        <AvailableTrips></AvailableTrips>
        <AvailableTrips></AvailableTrips>
        <AvailableTrips></AvailableTrips>
      </section>
    </>
  );
};
