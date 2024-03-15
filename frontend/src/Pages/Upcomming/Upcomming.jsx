import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Upcomming.scss";
import { CardsUp } from "../../Components/Upcomming/CardsUp";
import { NavBar } from "../../Components/Navbar/navbar";
export const Upcomming = () => {
  const location = useLocation();
  const userId = location.state.userId;
  console.log(userId);
  const navigate = useNavigate();

  return (
    <>
      <div className="logo">EcoRide</div>
      <div className="top">
        <IoIosArrowBack
          className="icon"
          onClick={() => navigate("/Show", { state: { userId: userId } })}
        />
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
