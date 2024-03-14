import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import "./navbar.scss";

export const NavBar = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  // Obtén el userId del localStorage
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    console.log(userId)
  }, [userId]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleBookClick = () => {
    navigate('/Show', { state: { user_id: userId } });
  };
  const handleChatClick = () => {
    navigate('/Chat', { state: { user_id: userId } });
  };
  const handleMapClick = () => {
    navigate('/Map', { state: { user_id: userId } });
  };
  const handleProfileClick = () => {
    navigate('/Profile', { state: { user_id: userId } });
  };
  const handleChooseClick = () => {
    navigate('/Choose', { state: { user_id: userId } });
  };

  return (
    <>
      <div className="logo">EcoRide</div>
      <div
        className={`burger-menu ${isOpen ? "white-close" : ""}`}
        onClick={toggleMenu}
      >
        {isOpen ? <TfiClose /> : <CiMenuBurger />}
      </div>

      <nav className={isOpen ? "open" : ""}>
        <ul className="list">
          <li className="listOrder" onClick={handleBookClick}>
            <Link to="/Show" className="fix">
              Book
            </Link>
          </li>
          <li className="listOrder" onClick={handleMapClick}>
            <NavLink className="fix">
              Map
            </NavLink>
          </li>
          <li className="listOrder" onClick={handleChatClick}>
            <NavLink className="fix">
              Chat
            </NavLink>
          </li>
          <li className="listOrder" onClick={handleProfileClick}>
            <NavLink className="fix">
              Profile
            </NavLink>
          </li>
          <li className="listOrder" onClick={handleChooseClick}>
            <NavLink className="fix">
              Change between
              <br /> driver/passenger
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
  