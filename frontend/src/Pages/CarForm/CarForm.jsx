import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { NavBar } from "../../Components/Navbar/navbar";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import "./CarForm.scss";
import { useLocation } from "react-router-dom";

const supabase = createClient('https://hyjkqodxeienwesmnalj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5amtxb2R4ZWllbndlc21uYWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MDY5MzYsImV4cCI6MjAyNTk4MjkzNn0.pQeTd7zxmI8U67FUYepdZF4NWicXecjAZ2-GvQMgMoc')

export const CarForm = () => {
  const [model, setModel] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [carUid, setCarUid] = useState(null); // Nuevo estado para guardar el carUid
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.userId;
  console.log(userId)

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!model || !licensePlate) {
      setErrorMessage("Por favor, rellena todos los campos.");
      return;
    }

    const { error: insertError } = await supabase
      .from("carinfo")
      .insert([
        { model: model, licenseplate: licensePlate },
      ]);

    if (insertError) {
      console.error("Error: ", insertError);
    } else {
      const { data: carData, error: selectError } = await supabase
        .from('carinfo')
        .select('caruid')
        .eq('model', model)
        .eq('licenseplate', licensePlate)
        .order('caruid', { ascending: false })
        .limit(1)
        .single();

      if (selectError) {
        console.error("Error: ", selectError);
      } else {
        setCarUid(carData.caruid); // Guardamos el carUid en el estado
        console.log("Car info inserted successfully: ", "Car uid: ", carData.caruid);
        navigate("/DriverForm", { state: { caruid: carData.caruid, userId: userId } });
      }
    }
  };
  return (
    <>
      <div className="top">
      <IoIosArrowBack className="icon" onClick={() => navigate("/Choose", { state: { userId: userId } })} />

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
            <button type="submit" >Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};