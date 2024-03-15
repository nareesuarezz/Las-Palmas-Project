import React from "react";
import { NavBar } from "../../Components/Navbar/navbar";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./DriverWait.scss";

export const DriverWait = () => {
  const navigate = useNavigate(); // Usa useNavigate
  const location = useLocation();
  const userId = location.state.userId;
  console.log(userId);
  return (
    <>
      <div className="top">
        <IoIosArrowBack
          className="icon"
          onClick={() => navigate("/Choose", { state: { userId: userId } })}
        />
      </div>
      <NavBar></NavBar>
    </>
  );
};
