import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./Facebook.scss";
export const Facebook = () => {
  return (
    <>
      <div className="top">
        <NavLink to="/Welcome">
          <IoIosArrowBack className="icon" />
        </NavLink>
      </div>
      <section className="FacebookSite">
        <h3>You’re logging in with your Facebook profile </h3>
        <div className="FacebookButtom">
          <p>Would you like to continue?</p>
          <NavLink id="Continue1" className="button" to="/Choose">
            Continue
          </NavLink>
          <NavLink id="Cancel1" className="button" to="/Welcome">
            Cancel
          </NavLink>
        </div>
      </section>
    </>
  );
};
