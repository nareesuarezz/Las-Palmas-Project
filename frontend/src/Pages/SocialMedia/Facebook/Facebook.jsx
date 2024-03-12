import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
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
          <NavLink className="button" to="/Choose">
            Continue
          </NavLink>
          <NavLink className="button" to="/Welcome">
            Cancel
          </NavLink>
        </div>
      </section>
    </>
  );
};
