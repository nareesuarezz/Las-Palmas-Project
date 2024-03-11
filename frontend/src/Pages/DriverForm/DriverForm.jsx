import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { NavBar } from "../../Components/Navbar/navbar";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink, useParams } from "react-router-dom";
import "./DriverForm.scss";

const supabase = createClient('https://gdovlzckdjkuudotrxob.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdkb3ZsemNrZGprdXVkb3RyeG9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MTQ2NTEsImV4cCI6MjAyNTI5MDY1MX0.hgVrFsLYyVwnggB1eJ9oNPcm1wfZPW3ENpwxuZyFFp8'); // Reemplaza con tu clave de API de Supabase

export const DriverForm = () => {
  const { carId } = useParams();
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [passengers, setPassengers] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!fromLocation || !toLocation || !pickTime || !passengers || !pickDate) {
      setErrorMessage("Por favor, rellena todos los campos.");
      return;
    }

    const date = `${pickDate} ${pickTime}`;

    const { data, error } = await supabase
      .from("routeinfo")
      .insert([
        {
          fromlocation: fromLocation,
          tolocation: toLocation,
          date: date,
          passengers: passengers,
          car_uid: carId,
          extra_info: comment,
        },
      ]);

    if (error) {
      console.error("Error: ", error);
    } else {
      console.log("Route info inserted successfully: ", data);
    }
  };

  return (
    <>
      <div className="top">
        <NavLink to="/Choose">
          <IoIosArrowBack className="icon" />
        </NavLink>
      </div>
      <NavBar></NavBar>

      <section className="DriverForm">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="from"
              name="from"
              required
              placeholder="From"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="to"
              name="to"
              required
              placeholder="To"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
            ></input>
          </div>
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
