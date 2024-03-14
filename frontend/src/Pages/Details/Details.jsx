import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import { NavBar } from "../../Components/Navbar/navbar";
import { createClient } from "@supabase/supabase-js";
import { Image } from "../../Components/BackroundImg/Image";
import "./Details.scss";

const supabase = createClient('https://gdovlzckdjkuudotrxob.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdkb3ZsemNrZGprdXVkb3RyeG9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MTQ2NTEsImV4cCI6MjAyNTI5MDY1MX0.hgVrFsLYyVwnggB1eJ9oNPcm1wfZPW3ENpwxuZyFFp8')

export const Details = () => {

  async function fetchLocationName(lat, lon) {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
    const data = await response.json();
    const locationComponents = data.display_name.split(', ');
    const simplifiedLocationName = locationComponents.slice(0, 4).join(', ');
    return simplifiedLocationName;
  }

  function parseLocation(locationString) {
    const coords = locationString.replace('(', '').replace(')', '').split(',');
    return [parseFloat(coords[0]), parseFloat(coords[1])];
  }

  async function fetchRoute() {
    const { data: route, error } = await supabase
      .from('routeinfo')
      .select('*')
      .eq('route_id', route_id)
      .single();

    if (error) {
      console.error('Error fetching route: ', error);
    } else {
      const { data: cars, error: carsError } = await supabase
        .from('carinfo')
        .select('*')
        .eq('caruid', route.car_uid)
        .single();

      if (carsError) {
        console.error('Error fetching cars: ', carsError);
      } else {
        const fromLocationName = await fetchLocationName(...parseLocation(route.fromlocation));
        const toLocationName = await fetchLocationName(...parseLocation(route.tolocation));
        route.car = cars;
        route.fromLocationName = fromLocationName;
        route.toLocationName = toLocationName;
        setRoute(route);
      }
    }
  }
  const location = useLocation();
  const route_id = location.state ? location.state.route_id : null;

  const [route, setRoute] = useState(null);

  useEffect(() => {
    if (route_id) {
      fetchRoute();
    }
  }, [route_id]);

  if (!route) {
    return console.log(route_id);
  }

  const date = new Date(route.date);
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

  return (
    <>
      <Image></Image>
      <div className="top">
        <NavLink to="/Show">
          <IoIosArrowBack className="icon" />
        </NavLink>
        <NavBar></NavBar>
      </div>
      <section className="DetailContainer">
        <NavLink to="/WaitingTrips" id="ChatD">
          Chat With The Driver
        </NavLink>
        <article id="detailsArticle">
          <div id="topDetail">
            <p>
              From {route.fromLocationName} To {route.toLocationName} : <br />
              {route.car.model} <br />
              Time: {formattedDate}
            </p>
          </div>
          <div id="buttomDetail">
            <p>
              {route.extra_info}
            </p>
          </div>
        </article>
        <NavLink to="/WaitingTrips" className="button">
          Add To You Trip
        </NavLink>
      </section>
    </>
  );
};
