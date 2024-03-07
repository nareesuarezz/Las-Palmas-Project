import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import "./CreateAccount.scss";

const supabase = createClient('https://gdovlzckdjkuudotrxob.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdkb3ZsemNrZGprdXVkb3RyeG9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MTQ2NTEsImV4cCI6MjAyNTI5MDY1MX0.hgVrFsLYyVwnggB1eJ9oNPcm1wfZPW3ENpwxuZyFFp8')

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
        <Auth
    supabaseClient={supabase}
    appearance={{
      style: {
        button: { width: '220px',
          height: '30px',
          borderRadius: '5px', },
        anchor: { color: 'blue' },
        input: {width: '280px',
          height: '30px',
          padding: '20px',
          border: 'none',
          background: '#d5d5d5',
          borderRadius: '5px'}
        //..
      },
    }}
  />
      </section>
    </>
  );
};
