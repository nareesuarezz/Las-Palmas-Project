import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { NavBar } from "../../Components/Navbar/navbar";

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
        <article className="Pick">
          <div className="LeftPick">
            <p>From ----- To ----- : Toyota Corolla  Time: 8:00 AM</p>
          </div>
          <div className="rightPick">
            <p>Details</p>
          </div>
        </article>
      </section>
    </>
  );
};
