import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { NavBar } from "../../Components/Navbar/navbar";
import "./Details.scss";
export const Details = () => {
  return (
    <>
      <div className="top">
        <NavLink to="/Show">
          <IoIosArrowBack className="icon" />
        </NavLink>
        <NavBar></NavBar>
      </div>
      <section className="DetailContainer">
        <NavLink to="/Chat" id="ChatD">
          Chat With The Driver
        </NavLink>
        <article>
          <div>
            {" "}
            <p>
              From ----- To ----- : <br />
              Toyota Corolla <br />
              Time: 8:00 AM
            </p>
          </div>
          <div>
            <p>
              Pets are not allowed in the car, please do not be late. I am
              sharing my phone number with you: 7870009 Gas sharing price is
              7000 isk
            </p>
          </div>
        </article>
        <NavLink to="/DriverChat" className="button">
          Add To You Trip
        </NavLink>
      </section>
    </>
  );
};
