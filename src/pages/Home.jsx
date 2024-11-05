import React from "react";
import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";
import DiscountCarousel from "../components/DiscountCarousel";

import Products from "./Products";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";



function Home () {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <DiscountCarousel />
      <Products />
      <AboutPage />
      <ContactPage />
    
      </div>
  )
}

export default Home;