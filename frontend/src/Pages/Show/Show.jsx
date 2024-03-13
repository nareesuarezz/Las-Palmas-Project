import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { NavBar } from "../../Components/Navbar/navbar";
import "./Show.scss";
import { AvailableTrips } from "../../Components/AvailableTrips/AvailableTrips";

export const Show = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="top">
        <NavLink to="/Map">
          <IoIosArrowBack className="icon" />
        </NavLink>
        <NavBar></NavBar>
      </div>
      <section className="Trips">
        <h1 id="Shorter">Available Trips</h1>
        <AvailableTrips
          handleToggle={handleToggle}
          openIndex={openIndex}
          index={0}
        ></AvailableTrips>
        <AvailableTrips
          handleToggle={handleToggle}
          openIndex={openIndex}
          index={1}
        ></AvailableTrips>
        <AvailableTrips
          handleToggle={handleToggle}
          openIndex={openIndex}
          index={2}
        ></AvailableTrips>
        <AvailableTrips
          handleToggle={handleToggle}
          openIndex={openIndex}
          index={3}
        ></AvailableTrips>
      </section>
    </>
  );
};
