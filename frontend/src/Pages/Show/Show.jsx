import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { NavBar } from "../../Components/Navbar/navbar";

export const Show = () => {
  return (
    <>
      <div className="top">
        <NavLink to="/Policy">
          <IoIosArrowBack className="icon" />
        </NavLink>
        <NavBar></NavBar>
      </div>
    </>
  );
};
