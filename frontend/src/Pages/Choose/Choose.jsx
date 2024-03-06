import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "../../Components/Navbar/navbar";
import { Book } from "../Book/book";
import { trip } from "../Trip/trip";

export const Choose = () => {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" Component={trip} />
          <Route path="/Book" element={Book} />
        </Routes>
      </Router>
    </>
  );
};
