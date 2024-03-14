import React from "react";
import { NavBar } from "../../Components/Navbar/navbar";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Chat.scss";

export const Chat = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.user_id;
  console.log(userId)
  return (
    <>
      <div className="top">
      <IoIosArrowBack className="icon" onClick={() => navigate("/Choose", { state: { userId: userId } })} />

      </div>
      <NavBar></NavBar>
    </>
  );
};
