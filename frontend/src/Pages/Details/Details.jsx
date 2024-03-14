import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { NavBar } from "../../Components/Navbar/navbar";
import { Image } from "../../Components/BackroundImg/Image";
import "./Details.scss";
export const Details = () => {
  return (
    <>
      <Image></Image>
      <div className="top">
        <NavLink to="/Show">
          <IoIosArrowBack className="icon" />
        </NavLink>
        <NavBar></NavBar>
      </div>
      <section className="DetailContainer">
        <NavLink to="/WaitingTrips" id="ChatD">
          Chat With The Driver
        </NavLink>
        <article id="detailsArticle">
          <div id="topDetail">
            <p>
              From ----- To ----- : <br />
              Toyota Corolla <br />
              Time: 8:00 AM
            </p>
          </div>
          <div id="buttomDetail">
            <p>
              Pets are not allowed in the car, please do not be late. I am
              sharing my phone number with you: 7870009 Gas sharing price is
              7000 isk dhhhadh ahdha dha hdha dhwah dhwad hawd hahd
            </p>
          </div>
        </article>
        <NavLink to="/Upcoming" className="button">
          Add To You Trip
        </NavLink>
      </section>
    </>
  );
};
