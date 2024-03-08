import React from "react";
import { DiApple } from "react-icons/di";
import { DiChrome } from "react-icons/di";
import { FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import "./Welcome.scss";

export const Welcome = () => {
  return (
    <>
      <div className="top">
        <NavLink to="/Policy">
          <IoIosArrowBack className="icon" />
        </NavLink>
      </div>
      <section className="Welcome">
        <h1> Welcome</h1>
        <p>
          We’re so glad you are here! Please
          <br /> choose an option below to sign in
        </p>
        <article className="madeLogin">
          <NavLink className="link" to="/Chrome">
            <DiChrome className="icon" /> Continue with Email
          </NavLink>
          <NavLink className="link" to="/Facebook">
            <FaFacebook className="icon" /> Continue with Faceboox
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
