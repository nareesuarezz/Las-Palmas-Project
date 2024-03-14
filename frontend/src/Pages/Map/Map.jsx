import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Popup, Marker, Polyline } from "react-leaflet";
import { Icon } from "leaflet";
import { createClient } from "@supabase/supabase-js";

import "leaflet/dist/leaflet.css";
import { NavBar } from "../../Components/Navbar/navbar";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { BsArrowDownUp } from "react-icons/bs";
import "./Map.scss";

const supabase = createClient('https://hyjkqodxeienwesmnalj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5amtxb2R4ZWllbndlc21uYWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MDY5MzYsImV4cCI6MjAyNTk4MjkzNn0.pQeTd7zxmI8U67FUYepdZF4NWicXecjAZ2-GvQMgMoc')

function parseLocation(locationString) {
  const coords = locationString.replace('(', '').replace(')', '').split(',');
  return [parseFloat(coords[0]), parseFloat(coords[1])];
}



export const Map = () => {
  const [routes, setRoutes] = useState([]);

  const MapIcon = new Icon({
    iconUrl: '/images/icon.png',
    iconSize: [31, 31],
    iconAnchor: [12, 41],
  });

  async function getRoutes() {
    const { data, error } = await supabase
      .from('routeinfo')
      .select('*');

    if (error) {
      console.error('Error: ', error);
      return;
    }
    console.log(data);
    return data;
  }

  useEffect(() => {
    async function fetchRoutes() {
      const data = await getRoutes();
      setRoutes(data);
    }

    fetchRoutes();
  }, []);

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

        <MapContainer center={[64.1355, -21.8954]} zoom={12} style={{ height: "642px", width: "500px" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {routes.map((route, index) => {
            const fromLocation = parseLocation(route.fromlocation);
            const toLocation = parseLocation(route.tolocation);

            return (
              <div key={index}>
                {fromLocation && (
                  <Marker position={fromLocation} icon={MapIcon}>
                    <Popup>
                      From: {fromLocation} - ID: {route.route_id}
                    </Popup>
                  </Marker>
                )}
                {toLocation && (
                  <Marker position={toLocation} icon={MapIcon}>
                    <Popup>
                      To: {toLocation} - ID: {route.route_id}
                    </Popup>
                  </Marker>
                )}
              </div>
            );
          })}


        </MapContainer>
      </div>
      <article className="mapForm">
        <form id="maptypo" action="">
          <h3>Set your trip</h3>
          <div className="input">
            <input type="text" placeholder="From" />
            <BsArrowDownUp className="arrowicon" />
            <input type="text" placeholder="To" />
          </div>
          <input type="datetime-local" />
        </form>
        <NavLink className="button" to="/Show">
          Done
        </NavLink>
      </article>
    </>
  );
};
