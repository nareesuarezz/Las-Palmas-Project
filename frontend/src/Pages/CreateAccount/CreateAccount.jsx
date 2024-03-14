import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import "./CreateAccount.scss";

import { Image } from "../../Components/BackroundImg/Image";

const supabase = createClient('https://hyjkqodxeienwesmnalj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5amtxb2R4ZWllbndlc21uYWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MDY5MzYsImV4cCI6MjAyNTk4MjkzNn0.pQeTd7zxmI8U67FUYepdZF4NWicXecjAZ2-GvQMgMoc')

export const CreateAccount = async () => {
  const navigate = useNavigate();
  const location = useLocation();

  const authId = localStorage.getItem('userId');
  console.log(authId)

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


  const handleSubmitt = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from("users")
        .insert([
          {
            name: formData.name,
            last_name: formData.lastName,
            phone_number: formData.number,
            description: formData.message,
            auth_id: authId,
          },
        ]).select();

      if (!error) {
        navigate('/Choose');
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <>
      <Image></Image>
      <div className="top">
        <NavLink to="/Welcome">
          <IoIosArrowBack className="icon" />
        </NavLink>
        <div className="logo">EcoRide</div>
      </div>
      <form onSubmit={handleSubmitt}>
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
              ></input>
            </div>
            <div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="LastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
              ></input>
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
              ></input>
            </div>
            <div>
              <input
                type="text"
                id="Message"
                name="message"
                placeholder="Description"
                value={formData.message}
                onChange={handleInputChange}
              ></input>
            </div>
            <button type="submit">Submit</button>
          </article>
        </section>
      </form >



    </>
  );
};