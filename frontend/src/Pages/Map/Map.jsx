import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css"; // Importa los estilos de Leaflet
import { NavBar } from "../../Components/Navbar/navbar";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { BsArrowDownUp } from "react-icons/bs";
import "./Map.scss";

export const Map = () => {
  return (
    <>
      <div className="top">
        <NavLink to="/Choose">
          <IoIosArrowBack className="icon" />
        </NavLink>
      </div>
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
          position: "fixed",
          top: "95px",
          zIndex: "-1",
        }}
      >
        <MapContainer
          center={[28.1248, -15.43]}
          zoom={12}
          style={{ height: "642px", width: "500px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
      <article className="mapForm">
        <form id="maptypo" action="">
          <h3>Set your trip</h3>
          <input type="text" placeholder="From" />
          <BsArrowDownUp />
          <input type="text" placeholder="To" />
          <input type="datetime-local" />
        </form>
        <NavLink className="button" to="/Show">
          Done
        </NavLink>
      </article>
    </>
  );
};
