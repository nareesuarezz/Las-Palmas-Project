import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./AvailableTrips.scss";
import { IoIosArrowBack } from "react-icons/io";

export const AvailableTrips = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <article className="Pick">
        <div className="LeftPick">
          <p>
            From ----- To ----- : <br />
            Toyota Corolla <br />
            Time: 8:00 AM
          </p>
        </div>
        <div className="rightPick">
          <p
            className={isOpen ? "Active" : "iconDetailsList"}
            onClick={toggleMenu}
          >
            Details
          </p>
          <IoIosArrowBack
            id="Arrow"
            className={isOpen ? "iconDetailsList" : ""}
            onClick={toggleMenu}
          />
          <ul id="close" className={isOpen ? "DetailsList" : ""}>
            <li>
              <NavLink className="ShowL" to="/Details">
                See Details
              </NavLink>
            </li>
            <li>
              <NavLink className="ShowL" to="/WaitingTrips">
                See Details
              </NavLink>
            </li>
            <li>
              <NavLink className="ShowL" to="/Map">
                Back to Map
              </NavLink>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
};
