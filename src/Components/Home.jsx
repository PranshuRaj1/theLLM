import React from "react";
import Landing from "./Landing";
import MainContent from "./Hero";
import Stats from "./Stats";
import Approach from "./Approach";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Landing />
      <MainContent />
      <Stats />
      <Approach />
      <Footer />
    </>
  );
};

export default Home;
