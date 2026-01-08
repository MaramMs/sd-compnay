import React from "react";
import styles from "../../../Sass/home/hero.module.scss";
import Hero from "./Hero";
import ServicesList from "./ServicesList";
import AboutUs from "./about-us";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";
import FeaturedProjects from "./FeaturedProjects";
import Process from "./Process";
import BuildProduct from "./BuildProduct";

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
