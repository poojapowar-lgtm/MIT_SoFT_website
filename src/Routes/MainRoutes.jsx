import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import { AboutRoutes } from "./AboutRoutes";
import { ProgramsRoutes } from "./ProgramsRoutes";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {AboutRoutes}
      {ProgramsRoutes}
      {/* <Route path="contact" element={<ContactUs/>} />  */}
    </Routes>
  );
};

export default MainRoutes;
