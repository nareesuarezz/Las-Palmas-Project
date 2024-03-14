import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { NavBar } from "../../Components/Navbar/navbar";
import { Image } from "../../Components/BackroundImg/Image";
import "./Last.scss";
export const Last = () => {
  return (
    <>
      <Image></Image>
      <div className="top">
        <NavLink to="/Show">
          <IoIosArrowBack className="icon" />
        </NavLink>
        <NavBar></NavBar>
      </div>
      <section className="LastC">
        <h2>
          Thank you for
          <br /> choosing us!
        </h2>
        <NavLink className="button" to="/Show">
          Cancel
        </NavLink>
      </section>
    </>
  );
};
