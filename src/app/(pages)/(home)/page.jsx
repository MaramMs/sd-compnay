import React from "react";
import ServicesList from "./ServicesList";
import AboutUs from "./about-us";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import FeaturedProjects from "./FeaturedProjects";
import Process from "./Process";
import BuildProduct from "./BuildProduct";
import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesList />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      <Process />
      <BuildProduct />
    </>
  );
};

export default Home;
