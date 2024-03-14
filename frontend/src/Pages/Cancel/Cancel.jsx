import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { NavBar } from "../../Components/Navbar/navbar";
import { Image } from "../../Components/BackroundImg/Image";
import "./Cancel.scss";
export const Cancel = () => {
  return (
    <>
      <Image></Image>
      <div className="top">
        <NavLink to="/Show">
          <IoIosArrowBack className="icon" />
        </NavLink>
        <NavBar></NavBar>
      </div>
      <section className="CancelC">
        <h1>Trip Canceled</h1>
        <h3>
          You have canceled your trip.
          <br />
          If it was a mistake you can book it
          <br /> again or contact the driver.
        </h3>
        <NavLink className="button" to="/Show">
          Book Other Trip
        </NavLink>
      </section>
    </>
  );
};
