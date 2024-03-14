import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./Upcomming.scss";
import { CardsUp } from "../../Components/Upcomming/CardsUp";
import { NavBar } from "../../Components/Navbar/navbar";
export const Upcomming = () => {
  return (
    <>
      <div className="logo">EcoRide</div>
      <div className="top">
        <NavLink to="/Show">
          <IoIosArrowBack className="icon" />
        </NavLink>
        <NavBar></NavBar>
      </div>
      <section className="UpcommingC">
        <h1>Ucomming Trips</h1>
        <article id="CardsC">
          <CardsUp></CardsUp>
          <CardsUp></CardsUp>
          <CardsUp></CardsUp>
        </article>
      </section>
      ;
    </>
  );
};
