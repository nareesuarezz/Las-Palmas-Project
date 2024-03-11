import React from "react";
import { NavBar } from "../../Components/Navbar/navbar";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./WaitingTrips.scss";

export const WaitingTrips = () => {
  return (
    <>
      <div className="top">
        <NavLink to="/Choose">
          <IoIosArrowBack className="icon" />
        </NavLink>
        <NavBar></NavBar>
      </div>
    </>
  );
};
