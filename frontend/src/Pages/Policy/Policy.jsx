import React from "react";
import { NavLink } from "react-router-dom";
import "./Policy.scss";
import { Image } from "../../Components/BackroundImg/Image";
export const Policy = () => {
  return (
    <>
      <Image></Image>
      <section className="PolicyMain">
        <h1>Our Policy</h1>
        <p>
          We want to connect people for
          <br /> environmental purpose.
          <br /> You can be the one who makes
          <br /> the difference.
        </p>
        <NavLink className="button" to="/Welcome">
          Done
        </NavLink>
      </section>
    </>
  );
};
