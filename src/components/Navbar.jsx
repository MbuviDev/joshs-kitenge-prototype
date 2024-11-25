import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.jpg";
import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import axios from "axios";
import API_BASE_URL from "../config/apiConfig";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const fetchCartCount = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await axios.get(`${API_BASE_URL}/cart`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCartItemCount(response.data.items.length);
      } catch (error) {
        console.error("Error fetching cart count:", error);
      }
    };

    fetchCartCount();
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="bg-sky-400 text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" onClick={handleLinkClick}>
            <img src={logo} alt="Customer Logo" className="h-10 w-auto" />
          </Link>
          <span className="text-xl font-bold">Josh's Kitenge</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-sky-400 md:bg-transparent md:static md:flex md:items-center`}
        >
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-6 w-full">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-2 md:inline hover:text-gray-300 ${
                  isActive ? "text-yellow-500 font-bold" : ""
                }`
              }
              onClick={handleLinkClick}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `block px-4 py-2 md:inline hover:text-gray-300 ${
                  isActive ? "text-yellow-500 font-bold" : ""
                }`
              }
              onClick={handleLinkClick}
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className="block px-4 py-2 md:inline hover:text-gray-300"
              onClick={handleLinkClick}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className="block px-4 py-2 md:inline hover:text-gray-300"
              onClick={handleLinkClick}
            >
              Contact Us
            </NavLink>
          </div>

          {/* Mobile Icons */}
          <div className="flex flex-col md:hidden space-y-2 mt-4">
            <Link to="/login" aria-label="Login" className="flex items-center hover:text-gray-300">
              <FaUser className="mr-2" /> Login
            </Link>
            <Link
              to="/cart"
              aria-label="Cart"
              className="flex items-center hover:text-gray-300"
            >
              <FaShoppingCart className="mr-2" />
              Cart
              {cartItemCount > 0 && (
                <span className="bg-red-500 text-white text-sm rounded-full px-2 py-1 ml-2">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Search, User & Cart for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Bar */}
          <div className="flex items-center border border-gray-500 rounded px-2">
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent text-white focus:outline-none"
            />
            <FaSearch className="ml-2" />
          </div>

          {/* User Icon */}
          <Link to="/login" aria-label="Login" className="hover:text-gray-300">
            <FaUser />
          </Link>

          {/* Cart Icon */}
          <Link to="/cart" className="flex items-center space-x-2 hover:text-gray-300">
            <FaShoppingCart />
            {cartItemCount > 0 && (
              <span className="bg-red-500 text-white text-sm rounded-full px-2 py-1">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
