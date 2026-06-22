import React from "react";
import Header from "../Components/header/Header";
import Banner from "../Components/banner/Banner";
import NationalRank from "../PageContent/HomeComponent/NationalRank/NationalRank";
import LifeAtCampus from "../PageContent/HomeComponent/LifeAtCampus/LifeAtCampus";
import Programs from "../PageContent/HomeComponent/Programs/Programs";
import Department from "../PageContent/HomeComponent/Department/Department";
import Footer from "../Components/Footer/Footer"
import Facilities from "../PageContent/HomeComponent/Facilities/Facilities";
import Global from "../PageContent/HomeComponent/Global/Global";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <NationalRank />
      <LifeAtCampus/>
      <Global/>
      <Programs/>
      <Facilities/>
      <Department/>
    </div>
  );
};

export default Home;
