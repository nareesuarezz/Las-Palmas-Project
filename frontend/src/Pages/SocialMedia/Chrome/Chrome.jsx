import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

export const Chrome = () => {
  return (
    <div className="top">
      <NavLink to="/Welcome">
        <IoIosArrowBack className="icon" />
      </NavLink>
    </div>
  );
};
