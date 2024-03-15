import React from "react";
import { NavLink } from "react-router-dom";
import "./AvailableTrips.scss";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
export const AvailableTrips = ({ handleToggle, openIndex, index, route }) => {
  const location = useLocation();
  const userId = location.state.userId;
  console.log(userId);
  const navigate = useNavigate();
  const handleSeeDetailsClick = () => {
    navigate("/Details", {
      state: { route_id: route.route_id, user_id: userId },
    });
  };
  const handleChatClick = () => {
    navigate("/Chat", { state: { user_id: userId } });
  };
  const handleMapClick = () => {
    navigate("/Map", { state: { user_id: userId } });
  };
  const handleAddClick = () => {
    navigate("/Upcoming", { state: { user_id: userId } });
  };
  const isOpen = openIndex === index;
  console.log("rutas ", route.route_id);
  const date = new Date(route.date);
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString(
    [],
    { hour: "2-digit", minute: "2-digit" }
  )}`;

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
              <NavLink to="/Details">See Details</NavLink>
            </li>
            <li onClick={handleChatClick}>
              <NavLink className="ShowL">Chat</NavLink>
            </li>
            <li onClick={handleMapClick}>
              <NavLink className="ShowL" to="/Map">
                Map
              </NavLink>
            </li>
            <li onClick={handleAddClick}>
              <NavLink className="ShowL" to="/Upcoming">
                Add
              </NavLink>
            </li>
          </ul>
        </div>
      </article>
    </>
  );
};
