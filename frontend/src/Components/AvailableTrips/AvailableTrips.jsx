import React from "react";
import { NavLink } from "react-router-dom";
import "./AvailableTrips.scss";
import { IoIosArrowBack } from "react-icons/io";

export const AvailableTrips = ({ handleToggle, openIndex, index }) => {
  const isOpen = openIndex === index;

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
            onClick={() => handleToggle(index)}
          >
            Details
          </p>
          <IoIosArrowBack
            id="Arrow"
            className={isOpen ? "iconDetailsList" : ""}
            onClick={() => handleToggle(index)}
          />
          <ul id="close" className={isOpen ? "DetailsList" : ""}>
            <li>
              <NavLink className="ShowL" to="/Details">
                See Details
              </NavLink>
            </li>
            <li>
              <NavLink className="ShowL" to="/WaitingTrips">
                Chat
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
