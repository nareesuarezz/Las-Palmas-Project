import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  Polyline,
} from "react-leaflet";
import { Icon } from "leaflet";
import { createClient } from "@supabase/supabase-js";

import "leaflet/dist/leaflet.css";
import { NavBar } from "../../Components/Navbar/navbar";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { BsArrowDownUp } from "react-icons/bs";
import "./Map.scss";

const supabase = createClient(
  "https://hyjkqodxeienwesmnalj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5amtxb2R4ZWllbndlc21uYWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MDY5MzYsImV4cCI6MjAyNTk4MjkzNn0.pQeTd7zxmI8U67FUYepdZF4NWicXecjAZ2-GvQMgMoc"
);

function parseLocation(locationString) {
  const coords = locationString.replace("(", "").replace(")", "").split(",");
  return [parseFloat(coords[0]), parseFloat(coords[1])];
}

async function fetchLocationCoords(locationName) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${locationName}`
  );
  const data = await response.json();
  if (data.length > 0) {
    return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
  } else {
    return null;
  }
}

function haversineDistance([lat1, lon1], [lat2, lon2]) {
  function toRad(x) {
    return (x * Math.PI) / 180;
  }

  const R = 6371; // Radio de la tierra en km
  const x1 = lat2 - lat1;
  const dLat = toRad(x1);
  const x2 = lon2 - lon1;
  const dLon = toRad(x2);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;

  return d;
}

async function getRoutes() {
  const { data, error } = await supabase.from("routeinfo").select("*");

  if (error) {
    console.error("Error: ", error);
    return;
  }
  console.log(data);
  return data;
}

export const Map = () => {
  const [routes, setRoutes] = useState([]);
  const navigate = useNavigate(); // Usa useNavigate
  const location = useLocation();
  const userId = location.state.userId;
  console.log(userId);
  const [searchFromLocationName, setSearchFromLocationName] = useState("");
  const [searchToLocationName, setSearchToLocationName] = useState("");
  const [searchDateString, setSearchDateString] = useState("");

  const MapIcon = new Icon({
    iconUrl: "/images/icon.png",
    iconSize: [31, 31],
    iconAnchor: [12, 41],
  });

  useEffect(() => {
    async function fetchRoutes() {
      const data = await getRoutes();

      let filteredRoutes = data;

      if (searchFromLocationName && searchToLocationName && searchDateString) {
        const searchFromLocation = await fetchLocationCoords(
          searchFromLocationName
        );
        const searchToLocation = await fetchLocationCoords(
          searchToLocationName
        );
        const searchDate = new Date(searchDateString);

        filteredRoutes = data.filter((route) => {
          const fromLocation = parseLocation(route.fromlocation);
          const toLocation = parseLocation(route.tolocation);
          const routeDate = new Date(route.date);

          if (!searchFromLocation || !searchToLocation) {
            return false;
          }

          const fromDistance = haversineDistance(
            searchFromLocation,
            fromLocation
          );
          const toDistance = haversineDistance(searchToLocation, toLocation);
          const timeDifference = Math.abs(routeDate - searchDate) / 60000; // Diferencia de tiempo en minutos

          return fromDistance <= 20 && toDistance <= 20 && timeDifference <= 30;
        });
      }

      setRoutes(filteredRoutes);
    }

    fetchRoutes();
  }, [searchFromLocationName, searchToLocationName, searchDateString]);

  return (
    <>
      <div className="top">
        <IoIosArrowBack
          className="icon"
          onClick={() => navigate("/Choose", { state: { userId: userId } })}
        />
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
          center={[64.1355, -21.8954]}
          zoom={12}
          style={{ height: "642px", width: "500px" }}
        >
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
            <input
              type="text"
              placeholder="From"
              onChange={(e) => setSearchFromLocationName(e.target.value)}
            />
            <BsArrowDownUp className="arrowicon" />
            <input
              type="text"
              placeholder="To"
              onChange={(e) => setSearchToLocationName(e.target.value)}
            />
          </div>
          <input
            type="datetime-local"
            onChange={(e) => setSearchDateString(e.target.value)}
          />
        </form>
        <button
          className="button"
          onClick={() => navigate("/Show", { state: { userId: userId } })}
        >
          Done
        </button>
      </article>
    </>
  );
};
