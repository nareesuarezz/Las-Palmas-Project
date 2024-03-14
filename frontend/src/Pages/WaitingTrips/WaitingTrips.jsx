import React, { useState, useEffect } from "react";
import { NavBar } from "../../Components/Navbar/navbar";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./WaitingTrips.scss";
import { Image } from "../../Components/BackroundImg/Image";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export const WaitingTrips = () => {
  const [notificationOpen, setNotificationOpen] = useState(false);

  useEffect(() => {
    // Set a timeout to open the notification container after a delay
    const timeoutId = setTimeout(() => {
      setNotificationOpen(true);
    }, 3000); // 1000 milliseconds (1 second)

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Image></Image>
      <div className="top">
        <NavLink to="/Show">
          <IoIosArrowBack className="icon" />
        </NavLink>
        <NavBar></NavBar>
      </div>
      <div className={`notiContainer ${notificationOpen ? "open" : ""}`}>
        <NavLink to="/Chat">
          <AiOutlineMessage className="Notification" />
        </NavLink>
        <div>
          <p>Request Accepted</p>
          <p>Chat With The Passenger</p>
        </div>
        <NavLink to="/Chat">
          <IoIosArrowDropdownCircle className="Notification" />
        </NavLink>
      </div>
      <section className="AcceptD">
        <h3>
          Wait for a passenger to
          <br /> accept your ride
        </h3>
        <NavLink to="/Show" className="button">
          Cancel
        </NavLink>
      </section>
    </>
  );
};
