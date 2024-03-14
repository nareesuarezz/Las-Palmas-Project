import React from "react";
import { NavBar } from "../../Components/Navbar/navbar";
import { IoIosArrowBack } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import "./Choose.scss";
import { Image } from "../../Components/BackroundImg/Image";

export const Choose = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = location.state.userId;
  console.log(userId)

  const goToCarForm = () => {
    navigate("/CarForm", { state: { userId: userId } });
  };

  const goToMap = () => {
    navigate("/Map", { state: { userId: userId } });
  };

  return (
    <>
      <Image></Image>
      <div className="top">
        <NavLink to="/Welcome">
          <IoIosArrowBack className="icon" />
        </NavLink>
      </div>
      <NavBar></NavBar>
      <section id="Choose">

        <article className="ChooseContainer">
          <div>
            <button className="buttom" onClick={goToCarForm}>
              <FaCar />
            </button>
            <p>Driver</p>
          </div>

          <div>
            <button className="buttom" onClick={goToMap}>
              <FaPersonWalkingLuggage />
            </button>
            <p>Passenger</p>
          </div>
        </article>
        <NavLink className="button" to="/Welcome">
          Cancel
        </NavLink>
      </section>
    </>
  );
};

