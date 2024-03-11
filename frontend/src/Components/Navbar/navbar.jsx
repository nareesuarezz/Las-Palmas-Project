import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import "./navbar.scss";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="burger-menu" onClick={toggleMenu}>
        {isOpen ? <IoClose /> : <FaBars />}
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
