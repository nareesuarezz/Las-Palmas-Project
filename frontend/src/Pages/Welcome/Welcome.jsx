import React from "react";
import { DiApple } from "react-icons/di";
import { DiChrome } from "react-icons/di";
import { FaFacebookF } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import "./Welcome.scss";
import { Image } from "../../Components/BackroundImg/Image";

export const Welcome = () => {
  return (
    <>
      <Image></Image>
      <div className="top">
        <NavLink to="/Policy">
          <IoIosArrowBack className="icon" />
        </NavLink>
        <div className="logo">
        EcoRide
    </div>
      </div>
      <section className="Welcome">
        <h1> Welcome</h1>
        <p id="text-welcome">
          We’re so glad you are here! 
          <br /> Please choose an option below to
          <br />Sign in
        </p>
        <article className="madeLogin">
          <NavLink className="link" to="/Chrome">
            <DiChrome className="icon" /> Continue with Email
          </NavLink>
          <NavLink className="link" to="/Facebook">
            <FaFacebookF className="icon" /> Continue with Faceboox
          </NavLink>
          <NavLink className="link" to="/Apple">
            <DiApple className="icon" /> Continue with Apple ID
          </NavLink>
          <NavLink to="/Create" className="create">
            Create Account
          </NavLink>
        </article>
      </section>
    </>
  );
};
