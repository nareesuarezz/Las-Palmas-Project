import React from "react";
import { NavLink } from "react-router-dom";
import "./AvailableTrips.scss";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
export const AvailableTrips = ({ handleToggle, openIndex, index, route }) => {
  const navigate = useNavigate();
  const handleSeeDetailsClick = () => {
    navigate('/Details', { state: { route_id: route.route_id } });
  };

  const isOpen = openIndex === index;
  console.log("rutas ", route.route_id)
  const date = new Date(route.date);
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

  return (

    <>

      <article className="Pick">
        <div className="LeftPick">
          <p>

            From {route.fromLocationName} To {route.toLocationName} : <br />
            {route.car.model} <br />
            Time: {formattedDate}
          </p>
        </div>
        <div className="rightPick">
          <p
            className={isOpen ? "Active" : "iconDetailsList"}

            onClick={() => handleToggle(index)}
          >
            Details
          </p>
          <IoCloseOutline
            id="Arrow"
            className={isOpen ? "iconDetailsList" : ""}
            onClick={() => handleToggle(index)}
          />
          <ul id="close" className={isOpen ? "DetailsList" : ""}>
            <li className="ShowL" onClick={handleSeeDetailsClick}>
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
