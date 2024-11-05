// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import AboutPage from '../pages/AboutPage'; // Import AboutPage

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main> {/* Render the main content here */}
      <AboutPage /> {/* Include the AboutPage component here */}
    </div>
  );
};

export default Layout;
