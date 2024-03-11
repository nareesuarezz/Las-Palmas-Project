import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { NavBar } from "../../Components/Navbar/navbar";
import { IoIosArrowBack } from "react-icons/io";

import { NavLink } from "react-router-dom";
import "./CarForm.scss";
const supabase = createClient('https://gdovlzckdjkuudotrxob.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdkb3ZsemNrZGprdXVkb3RyeG9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MTQ2NTEsImV4cCI6MjAyNTI5MDY1MX0.hgVrFsLYyVwnggB1eJ9oNPcm1wfZPW3ENpwxuZyFFp8')

export const CarForm = () => {
  const [model, setModel] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!model || !licensePlate) {
      setErrorMessage("Por favor, rellena todos los campos.");
      return;
    }

    const { data, error } = await supabase
      .from("carinfo")
      .insert([
        { model: model, licenseplate: licensePlate },
      ]);

    if (error) {
      console.error("Error: ", error);
    } else {
      console.log("Car info inserted successfully: ", data);
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
              id="model"
              name="model"
              required
              placeholder="Model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <input
              type="text"
              id="LicensePlate"
              name="LicensePlate"
              required
              placeholder="License Plate"
              value={licensePlate}
              onChange={(e) => setLicensePlate(e.target.value)}
            ></input>
          </div>
          {errorMessage && <p>{errorMessage}</p>}
          <div className="form-group">
          <NavLink to="/DriverForm">
            <button type="submit" >Submit</button>
          </NavLink>
          </div>
        </form>
      </section>
    </>
  );
};
