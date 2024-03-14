import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import "./CreateAccount.scss";

import { Image } from "../../Components/BackroundImg/Image";

const supabase = createClient('https://hyjkqodxeienwesmnalj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5amtxb2R4ZWllbndlc21uYWxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MDY5MzYsImV4cCI6MjAyNTk4MjkzNn0.pQeTd7zxmI8U67FUYepdZF4NWicXecjAZ2-GvQMgMoc')

export const CreateAccount = () => {
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  let authId

  authId = localStorage.getItem('userId');

  if (authId === null || authId === "") {
    supabase.auth.getUser()
      .then(session => {
        console.log(session.data.user.id);
        authId = session.data.user.id
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }


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
      const { error: insertError } = await supabase
        .from("users")
        .insert([
          {
            name: formData.name,
            last_name: formData.lastName,
            phone_number: formData.number,
            description: formData.message,
            auth_id: authId,
          },
        ]);

      if (insertError) {
        console.error("Error:", insertError);
      } else {
        const { data: userData, error: selectError } = await supabase
          .from('users')
          .select('user_id')
          .eq('auth_id', authId)
          .order('user_id', { ascending: false })
          .limit(1)
          .single();

        if (selectError) {
          console.error("Error: ", selectError);
        } else {
          setUserId(userData.user_id); // Guarda el ID del usuario recién creado
          console.log("User info inserted successfully: ", "User id: ", userData.user_id);
          navigate('/Choose', { state: { userId: userData.user_id } }); // Pasa el ID del usuario a la siguiente página
        }
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data: user, error } = await supabase
        .from('users')
        .select('user_id')
        .eq('auth_id', authId)
        .single();

      if (error) {
        console.error("Error: ", error);
      } else if (user) {
        setUserId(user.user_id); // Guarda el ID del usuario existente
        navigate('/Choose', { state: { userId: user.user_id } }); // Pasa el ID del usuario a la siguiente página
      }
    };

    if (authId) {
      fetchUser();
    }
  }, [authId]);

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
