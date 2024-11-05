
import React, { useState } from "react";
import logo from '../assets/Logo.jpg';
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-sky-400 rounded-lg text-white fixed w-full top-0 transition-colors duration-300 mt-2 text-lg">
      <div className="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 rounded-lg">
          <Link to="/">
            <img src={logo} alt="Customer Logo" className="h-12 w-auto" /> {/* Adjust height as needed */}
          </Link>
          <span className="text-2xl font-bold">Josh's Kitenge</span>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links (Responsive) */}
        <div className={`flex-col md:flex md:flex-row ${menuOpen ? 'flex' : 'hidden'} md:flex space-y-4 md:space-y-0 space-x-4 md:space-x-4 absolute md:relative top-2 left-0 w-full md:w-auto p-4 md:p-0`}>
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <div className="relative group">
            <Link to="/products" className="hover:text-gray-300">Products</Link>
          </div>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
      
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center border border-gray-500 rounded p-2">
          <input type="text" placeholder="Search products..." className="text-white focus:outline-none" />
          <FaSearch className="ml-3" />
        </div>

        {/* Icons: Login & Cart (hidden on mobile, shown on desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login"><FaUser /></Link>
          <Link to="/cart" className="flex items-center space-x-1">
            <FaShoppingCart />
            <span>Cart</span>
          </Link>
              {/* Adding Checkout Link */}
              <Link to="/checkout" className="hover:text-gray-300">Checkout</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
