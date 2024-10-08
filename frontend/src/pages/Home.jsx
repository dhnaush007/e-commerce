import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import Bestseller from "../components/Bestseller";
import OurPolicy from "../components/OurPolicy";
import NewletterBox from "../components/NewletterBox";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <Bestseller />
      <OurPolicy />
      <NewletterBox />
    </div>
  );
};

export default Home;
