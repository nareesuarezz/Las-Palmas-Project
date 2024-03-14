import React, { useState, useEffect } from "react";
import { NavBar } from "../../Components/Navbar/navbar";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./WaitingTrips.scss";
import { Image } from "../../Components/BackroundImg/Image";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export const WaitingTrips = () => {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const userId = location.state.userId
  console.log(userId)
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
      <IoIosArrowBack className="icon" onClick={() => navigate("/Choose", { state: { userId: userId } })} />

         <NavBar></NavBar>   
      </div>
      <div className={`notiContainer ${notificationOpen ? "open" : ""}`}>
          <AiOutlineMessage className="Notification" onClick={() => navigate("/Chat", { state: { userId: userId } })}/>
        <div>
          <p>Request Accepted</p>
          <p>Chat With The Passenger</p>
        </div>
          <IoIosArrowDropdownCircle className="Notification" onClick={() => navigate("/Chat", { state: { userId: userId } })}/>
      </div>
      <section className="AcceptD">
        <h3>
          Wait for a passenger to
          <br /> accept your ride
        </h3>
          <button className="button" onClick={() => navigate("/Show", {state: {userId: userId}})}>Cancel</button>
      </section>
    </>
  );
};
