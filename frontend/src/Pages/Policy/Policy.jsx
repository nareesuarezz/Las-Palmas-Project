import React from "react";
import { NavLink } from "react-router-dom";
import "./Policy.scss";
export const Policy = () => {
  return (
    <section className="PolicyMain">
      <h1>Our Policy</h1>
      <p>
        We want to connect people
        <br /> for
        <br /> environmental purpose.
        <br /> You can be the one who
        <br /> makes
        <br /> the difference.
      </p>
      <NavLink className="button" to="/Welcome">
        Done
      </NavLink>
    </section>
  );
};
