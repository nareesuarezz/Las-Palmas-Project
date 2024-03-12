import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

import "./navbar.scss";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="logo">
        EcoRide
    </div>
      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? <TfiClose /> : <CiMenuBurger />}
      </div>
      <nav className={isOpen ? "open" : ""}>
        <ul className="list">
          <li className="listOrder">
            <NavLink className="fix" to="/Book">
              Book
            </NavLink>
          </li>
          <li className="listOrder">
            <NavLink className="fix" to="/Map">
              Map
            </NavLink>
          </li>
          <li className="listOrder">
            <NavLink className="fix" to="/Chat">
              chat
            </NavLink>
          </li>
          <li className="listOrder">
            <NavLink className="fix" to="/Profile">
              Profile
            </NavLink>
          </li>
          <li className="listOrder">
            <NavLink className="fix" to="/Choose">
              Change between
              <br /> driver/passenger
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
