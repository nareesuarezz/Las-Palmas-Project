import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import "../CreateAccount/CreateAccount.scss";
import { Image } from "../../Components/BackroundImg/Image";

const supabase = createClient('https://gdovlzckdjkuudotrxob.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdkb3ZsemNrZGprdXVkb3RyeG9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MTQ2NTEsImV4cCI6MjAyNTI5MDY1MX0.hgVrFsLYyVwnggB1eJ9oNPcm1wfZPW3ENpwxuZyFFp8')

export const AuthForm = () => {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session);
      });

      const {
          data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session);
      });

      return () => subscription.unsubscribe();
  }, []);

  if (!session) {
      return (
          <>
          <Image/>
          <div className="logo">EcoRide</div>
              <div className="top">
                  <NavLink to="/Welcome">
                      <IoIosArrowBack className="icon" />
                  </NavLink>
              </div>
              
              <section className="MainC">
                  <h1>Log In Sign Up</h1>
                  <Auth
                      supabaseClient={supabase}
                      appearance={{
                          style: {
                            
                           
                              label: {
                                 display:"none"
                              },
                              input: {
                                width: "300px",
                                padding: "20px",
                                border: "1px solid #25841c",
                                borderRadius: "5px",
                                backgroundColor: "white",
                                opacity:"0.6", 
                                fontFamily: "Roboto",                             
                                 
                              },
                              button: {
                                 width:"300px",
                                 padding: "20px",
                                 display: "flex",
                                 justifyContent: "center",
                                 alignitems: "center",
                                 backgroundColor: "#25841c",
                                 color: "white",
                                 border: "none",
                                 borderRadius: "5px",
                                 fontFamily: "Roboto",
  
                               },
                               anchor: {
                                fontFamily:"Roboto"
                               }

                             
                          },
                      }}
                      providers={[]}
                  />
              </section>
          </>
      );
  } else {
      navigate('/Create');
  }
};