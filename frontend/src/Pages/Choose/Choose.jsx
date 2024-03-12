import React from "react";
import { NavBar } from "../../Components/Navbar/navbar";
import { IoIosArrowBack } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./Choose.scss";
import { Image } from "../../Components/BackroundImg/Image";

export const Choose = () => {
  return (
    <>
      <Image></Image>
      <div className="top">
        <NavLink to="/Welcome">
          <IoIosArrowBack className="icon" />
        </NavLink>
      </div>
      <NavBar></NavBar>
      <section id="Choose">
       
        <article className="ChooseContainer">
          <div>
            <NavLink className="buttom" to="/DriverForm">
              <FaCar />
            </NavLink>
            <p>Driver</p>
          </div>

          <div>
            <NavLink className="buttom" to="/Map">
              <FaPersonWalkingLuggage />
            </NavLink>
            <p>Passenger</p>
          </div>
        </article>
        <NavLink className="button" to="/Welcome">
          Cancel
        </NavLink>
      </section>
    </>
  );
};
