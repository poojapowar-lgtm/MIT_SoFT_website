import React from "react";
import { Route } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import AboutMIT from "../PageContent/AboutComponent/about_mit/About_MIT";
import Leadership from "../PageContent/AboutComponent/leadership/Leadership";
import SOFT from "../PageContent/AboutComponent/soft/SOFT";
import Principal_MSG from "../PageContent/AboutComponent/principal_msg/Principal_MSG";
import Board_Body from "../PageContent/AboutComponent/board_body/Board_Body";
import Governing_Body from "../PageContent/AboutComponent/governing_body/Governing_Body";

export const AboutRoutes = (
  <Route path="aboutus" element={<AboutUs />}>
    <Route index element={<AboutMIT />} />
    <Route path="about-mit" element={<AboutMIT />} />
    <Route path="leadership-message" element={<Leadership />} />
    <Route path="about-soft" element={<SOFT />} />
    <Route path="principal-message" element={<Principal_MSG />} />
    <Route path="board-of-management" element={<Board_Body />} />
    <Route path="governing-body" element={<Governing_Body />} />
  </Route>
);
