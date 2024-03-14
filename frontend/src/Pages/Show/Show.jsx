import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { NavBar } from "../../Components/Navbar/navbar";
import { IoIosArrowBack } from "react-icons/io";
import "./Show.scss";
import { AvailableTrips } from "../../Components/AvailableTrips/AvailableTrips";

const supabase = createClient('https://gdovlzckdjkuudotrxob.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdkb3ZsemNrZGprdXVkb3RyeG9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3MTQ2NTEsImV4cCI6MjAyNTI5MDY1MX0.hgVrFsLYyVwnggB1eJ9oNPcm1wfZPW3ENpwxuZyFFp8')

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

async function fetchRoutesAndCars() {
  const { data: routes, error: routesError } = await supabase
    .from('routeinfo')
    .select('route_id, fromlocation, tolocation, date, passengers, car_uid');

  if (routesError) {
    console.error('Error fetching routes: ', routesError);
    return;
  }

  const { data: cars, error: carsError } = await supabase
    .from('carinfo')
    .select('caruid, model, licenseplate');

  if (carsError) {
    console.error('Error fetching cars: ', carsError);
    return;
  }

  const routesWithCarDetailsAndLocationNames = await Promise.all(routes.map(async route => {
    const fromLocationName = await fetchLocationName(...parseLocation(route.fromlocation));
    const toLocationName = await fetchLocationName(...parseLocation(route.tolocation));
    const car = cars.find(car => car.caruid === route.car_uid);
    return { ...route, car, fromLocationName, toLocationName };
  }));

  return routesWithCarDetailsAndLocationNames;
}

export const Show = () => {
  const [routes, setRoutes] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    async function fetchAndSetRoutes() {
      const routesWithCarDetailsAndLocationNames = await fetchRoutesAndCars();
      setRoutes(routesWithCarDetailsAndLocationNames);
    }

    fetchAndSetRoutes();
  }, []);

  return (
    <>
      <div className="top">
        <NavLink to="/Choose">
          <IoIosArrowBack className="icon" />
        </NavLink>
      </div>
      <NavBar></NavBar>

      <section className="Trips">
        <h1 id="Shorter">Available Trips</h1>
        {routes.map((route, index) => (
          <AvailableTrips
            key={route.route_id}
            handleToggle={handleToggle}
            openIndex={openIndex}
            index={index}
            route={route}
          />
        ))}
      </section>
    </>
  );
};
