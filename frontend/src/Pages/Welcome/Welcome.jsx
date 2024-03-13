import React from "react";
import { DiApple } from "react-icons/di";
import { DiChrome } from "react-icons/di";
import { FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Image } from "../../Components/BackroundImg/Image";
import { createClient } from "@supabase/supabase-js";

import "./Welcome.scss";
import { Button } from "@supabase/ui";

const supabase = createClient(
  "https://gdovlzckdjkuudotrxob.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdkb3ZsemNrZGprdXVkb3RyeG9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MTQ2NTEsImV4cCI6MjAyNTI5MDY1MX0.hgVrFsLYyVwnggB1eJ9oNPcm1wfZPW3ENpwxuZyFFp8"
);

async function signInWithFacebook() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "facebook",
  });
}

export const Welcome = () => {
  return (
    <>
      <Image></Image> <div className="logo">EcoRide</div>
      <div className="top">
        <NavLink to="/Policy">
          <IoIosArrowBack className="icon" />
        </NavLink>
      </div>
      <section className="Welcome">
        <h1> Welcome</h1>
        <p id="text-welcome">
          We’re so glad you are here!
          <br /> Please choose an option below to
          <br />
          Sign in
        </p>
        <article className="madeLogin">
          <Button className="link" to="/Chrome">
            <DiChrome className="icon" /> Continue with Email
          </Button>
          <Button className="link" onClick={signInWithFacebook}>
            <FaFacebook className="icon" /> Continue with Faceboox
          </Button>
          <Button className="link" to="/Apple">
            <DiApple className="icon" /> Continue with Apple ID
          </Button>
          <NavLink to="/Auth" className="create">
            Create Account or Login
          </NavLink>
        </article>
      </section>
    </>
  );
};
