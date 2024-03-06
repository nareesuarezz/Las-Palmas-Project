import React from "react";
import { DiApple } from "react-icons/di";
import { DiChrome } from "react-icons/di";
import { FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Welcome = () => {
  return (
    <section>
      <h1> Welcome</h1>
      <p>
        We’re so glad you are here! Please
        <br /> choose an option below to sign in
      </p>
      <article>
        <NavLink to="/Chrome">
          Continue with Email
          <DiChrome />
        </NavLink>
        <NavLink to="">
          Continue with Faceboox <FaFacebook />
        </NavLink>
        <NavLink to="">
          Continue with Apple ID <DiApple />
        </NavLink>
      </article>
    </section>
  );
};
