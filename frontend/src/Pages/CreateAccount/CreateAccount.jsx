import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import "./CreateAccount.scss";

import { Image } from "../../Components/BackroundImg/Image";

const supabase = createClient(
  "https://gdovlzckdjkuudotrxob.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdkb3ZsemNrZGprdXVkb3RyeG9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MTQ2NTEsImV4cCI6MjAyNTI5MDY1MX0.hgVrFsLYyVwnggB1eJ9oNPcm1wfZPW3ENpwxuZyFFp8"
);

export const CreateAccount = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.userId;
  
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
            auth_id: userId, //AQUI ES DONDE VA EL AUTENTICADO MONO MONO MONO MONO MONO
          },
        ]).select();

      // Si la inserción fue exitosa, navega a la página 'DriverForm'
      if (!error) {
        navigate('/DriverForm', { state: { userId } });
      }

      // ...
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
                placeholder="Description"
              ></input>
            </div>
            <button type="submit">Submit</button>
          </article>
        </section>
      </form >



    </>
  );
};