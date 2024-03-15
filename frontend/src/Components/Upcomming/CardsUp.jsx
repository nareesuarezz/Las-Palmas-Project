import React from "react";
import { NavLink } from "react-router-dom";
import "./CardsUp.scss";
export const CardsUp = () => {
  return (
    <>
      <article className="upcom">
        <p>
          From ----- To ----- :<br /> Toyota Corolla
          <br /> Time: 8:00 AM
        </p>
        <div>
          <NavLink className="WhiteLink" to="/Chat">
            Chat
          </NavLink>
          <NavLink className="WhiteLink" to="/Cancel">
            Cancel
          </NavLink>
        </div>
      </article>
    </>
  );
};
