import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { createClient } from '@supabase/supabase-js';
import "./CreateAccount.scss";

const supabase = createClient('https://gdovlzckdjkuudotrxob.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdkb3ZsemNrZGprdXVkb3RyeG9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MTQ2NTEsImV4cCI6MjAyNTI5MDY1MX0.hgVrFsLYyVwnggB1eJ9oNPcm1wfZPW3ENpwxuZyFFp8');

export const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    number: "",
    message: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from("users")
        .insert([
          {
            user_id: "3",
            name: formData.name,
            last_name: formData.lastName,
            phone_number: formData.number,
            description: formData.message,
            // auth_id: last_auth_id,
          },
        ]).select();

      if (error) {
        console.error("Error inserting data:", error.respose);
      } else {
        console.log("Data inserted successfully:", data.response);
        // Optionally, redirect to a success page
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="top">
        <NavLink to="/Welcome">
          <IoIosArrowBack className="icon" />
        </NavLink>
      </div>
      <form onSubmit={handleSubmit}>
        <section className="MainC">
          <h1>Let’s set up your profile</h1>
          <article>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="number"
                id="number"
                name="number"
                placeholder="Phone Number"
                required
                value={formData.number}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <input
                type="text"
                id="message"
                name="message"
                placeholder="Description"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Submit</button>
          </article>
        </section>
      </form>
    </>
  );
};
