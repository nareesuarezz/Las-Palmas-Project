import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import "../CreateAccount/CreateAccount.scss";

const supabase = createClient(
  "https://gdovlzckdjkuudotrxob.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdkb3ZsemNrZGprdXVkb3RyeG9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MTQ2NTEsImV4cCI6MjAyNTI5MDY1MX0.hgVrFsLYyVwnggB1eJ9oNPcm1wfZPW3ENpwxuZyFFp8"
);

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
        <div className="top">
          <NavLink to="/Welcome">
            <IoIosArrowBack className="icon" />
          </NavLink>
        </div>
        <section className="MainC">
          <h1>LogIn/SignUp</h1>
          <Auth
            supabaseClient={supabase}
            appearance={{
              style: {
                button: {
                  width: "220px",
                  height: "30px",
                  borderRadius: "5px",
                  border: "none",
                  background: "#d5d5d5",
                },
                input: {
                  width: "280px",
                  height: "30px",
                  padding: "20px",
                  border: "none",
                  background: "#d5d5d5",
                  borderRadius: "5px",
                },
              },
            }}
            providers={[]}
          />
        </section>
      </>
    );
  } else {
    navigate("/Create");
  }
};
