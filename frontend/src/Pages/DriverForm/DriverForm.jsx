import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import { createClient } from "@supabase/supabase-js";
import { NavBar } from "../../Components/Navbar/navbar";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink, useParams, useNavigate } from "react-router-dom"; // Importa useNavigate
import { useLocation } from "react-router-dom";
import "./DriverForm.scss";
import { Image } from "../../Components/BackroundImg/Image";

const supabase = createClient(
  "https://gdovlzckdjkuudotrxob.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdkb3ZsemNrZGprdXVkb3RyeG9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MTQ2NTEsImV4cCI6MjAyNTI5MDY1MX0.hgVrFsLYyVwnggB1eJ9oNPcm1wfZPW3ENpwxuZyFFp8"
);

async function fetchLocationName(lat, lon) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
  );
  const data = await response.json();
  return data.display_name;
}

function LocationPicker({ setLocation, setLocationName }) {
  useMapEvents({
    click: async (e) => {
      const name = await fetchLocationName(e.latlng.lat, e.latlng.lng);
      setLocation(`${e.latlng.lat},${e.latlng.lng}`);
      setLocationName(name);
    },
  });

  return null;
}

export const DriverForm = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [fromLocationName, setFromLocationName] = useState("");
  const [toLocationName, setToLocationName] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [passengers, setPassengers] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Usa useNavigate
  const location = useLocation();
  const carUid = location.state.caruid; // Ahora tienes el ID del vehículo

  const [showFromMap, setShowFromMap] = useState(false);
  const [showToMap, setShowToMap] = useState(false);

  const fromMapRef = useRef(null);
  const toMapRef = useRef(null);

  const handleClickOutsideMap = (event) => {
    if (fromMapRef.current && !fromMapRef.current.contains(event.target)) {
      setShowFromMap(false);
    }
    if (toMapRef.current && !toMapRef.current.contains(event.target)) {
      setShowToMap(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideMap);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMap);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!fromLocation || !toLocation || !pickTime || !passengers || !pickDate) {
      setErrorMessage("Por favor, rellena todos los campos.");
      return;
    }

    const date = `${pickDate} ${pickTime}`;

    const { data, error } = await supabase.from("routeinfo").insert([
      {
        fromlocation: fromLocation,
        tolocation: toLocation,
        date: date,
        passengers: passengers,
        extra_info: comment,
        car_uid: carUid,
      },
    ]);

    if (error) {
      console.error("Error: ", error);
    } else {
      console.log("Route info inserted successfully: ", carUid);
      // navigate("/SomeOtherPage");
    }
  };

  return (
    <>
      <Image></Image>
      <div className="top">
        <NavLink to="/Choose">
          <IoIosArrowBack className="icon" />
        </NavLink>
      </div>
      <NavBar></NavBar>

      <section className="DriverForm">
        <h2>Set your trip</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="from"
              name="from"
              required
              placeholder="From"
              value={fromLocationName}
              onClick={() => setShowFromMap(true)}
            ></input>
          </div>
          {showFromMap && (
            <div ref={fromMapRef}>
              <MapContainer
                center={[64.1355, -21.8954]}
                zoom={12}
                style={{ height: "300px", width: "300px" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <LocationPicker
                  setLocation={setFromLocation}
                  setLocationName={setFromLocationName}
                />
              </MapContainer>
            </div>
          )}
          <div className="form-group">
            <input
              type="text"
              id="to"
              name="to"
              required
              placeholder="To"
              value={toLocationName}
              onClick={() => setShowToMap(true)}
            ></input>
          </div>
          {showToMap && (
            <div ref={toMapRef}>
              <MapContainer
                center={[64.1355, -21.8954]}
                zoom={12}
                style={{ height: "300px", width: "300px" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <LocationPicker
                  setLocation={setToLocation}
                  setLocationName={setToLocationName}
                />
              </MapContainer>
            </div>
          )}
          <div className="form-group">
            <input
              type="time"
              id="pickTime"
              name="pickTime"
              required
              placeholder="Pick Time"
              value={pickTime}
              onChange={(e) => setPickTime(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="number"
              id="passengers"
              name="passenger"
              required
              placeholder="Passengers Available"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="date"
              id="pickDate"
              name="pickDate"
              required
              placeholder="Pick Date"
              value={pickDate}
              onChange={(e) => setPickDate(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <textarea
              id="comment"
              name="comment"
              placeholder="Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          {errorMessage && <p>{errorMessage}</p>}
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};
