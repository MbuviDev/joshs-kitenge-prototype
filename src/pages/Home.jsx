import React from "react";
import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";
import Products from "./Products";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";



function Home () {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <Products />
      <AboutPage />
      <ContactPage />
    
      </div>
  )
}

export default Home;