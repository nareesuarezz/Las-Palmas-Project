import React from "react";
import { NavBar } from "../../Components/Navbar/navbar";
import { IoIosArrowBack } from "react-icons/io";

import { NavLink } from "react-router-dom";
import "./DriverForm.scss";
import { Image } from "../../Components/BackroundImg/Image";

export const DriverForm = () => {
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
        <form action="#" method="post">
          <div class="form-group">
            <input
              type="text"
              id="from"
              name="from"
              required
              placeholder="From"
            ></input>
          </div>
          <div class="form-group">
            <input
              type="text"
              id="to"
              name="to"
              required
              placeholder="TO"
            ></input>
          </div>
          <div class="form-group">
            <input
              type="text"
              id="carDetails"
              name="carDetails"
              required
              placeholder="Car Details"
            ></input>
          </div>
          <div class="form-group">
            <input
              type="text"
              id="registration"
              name="registration"
              required
              placeholder="Registration"
            ></input>
          </div>
          <div class="form-group">
            <input
              type="time"
              id="pickTime"
              name="pickTime"
              required
              placeholder="Pick Time"
            ></input>
          </div>
          <div class="form-group">
            <input
              type="date"
              id="pickDate"
              name="pickDate"
              required
              placeholder="Pick Date"
            ></input>
          </div>
          <div class="form-group">
            <textarea
              id="comment"
              name="comment"
              placeholder="Comment"
            ></textarea>
          </div>
          <div class="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};
