import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./CreateAccount.scss";
export const CreateAccount = () => {
  return (
    <>
      <div className="top">
        <NavLink to="/Welcome">
          <IoIosArrowBack className="icon" />
        </NavLink>
      </div>
      <section className="MainC">
        <h1>Let’s set up your profile</h1>
        <article>
          <form>
            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              ></input>
            </div>
            <div>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Password"
              ></input>
            </div>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              ></input>
            </div>
            <div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="LastName"
                required
              ></input>
            </div>
            <div>
              <input
                type="number"
                id="number"
                name="number"
                placeholder="Phone Number"
                required
              ></input>
            </div>
            <div>
              <input
                type="text"
                id="Message"
                name="message"
                placeholder="Descriptsion"
              ></input>
            </div>
            <button type="submit">Submit</button>
          </form>
        </article>
      </section>
    </>
  );
};
