import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import logo from '../assets/Logo.jpg'; // Import your logo image

const ContactPage = () => {
  return (
    <div className="bg-gray-100 text-white min-h-screen p-6 mt-28">
      {/* Main Contact Information Section */}
      <div className="bg-sky-200 text-white rounded-lg shadow-lg p-24">
        {/* Logo Section */}
        <div className="flex items-center  mb-6">
          <img src={logo} alt="Logo" className="h-12 w-auto mr-4" />
          <h1 className="text-3xl font-bold justify-center ">Contact Us</h1>
        </div>

        {/* Main Content Section */}
        <div className="text-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Quick Links */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
              <ul className="list-disc ml-5">
                <li><a href="/" className="text-white hover:underline">Home</a></li>
                <li><a href="/kitenge-fabric" className="text-white hover:underline">Kitenge Fabric</a></li>
                <li><a href="/custom-kitenge" className="text-white hover:underline">Custom Kitenge</a></li>
                <li><a href="/about" className="text-white hover:underline">About Us</a></li>
                <li><a href="/contact" className="text-white hover:underline">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
              <p className="mb-2"><strong>Opening Hours:</strong> 24hrs</p>
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@joshkitenge.com" className="text-white hover:underline">info@joshkitenge.com</a></p>
              <p className="mb-2"><strong>Phone:</strong> <a href="tel:+0712345667" className="text-white hover:underline">0712345667</a>, <a href="tel:+072345678" className="text-white hover:underline">072345678</a></p>
              <p className="mb-2"><strong>Official Location:</strong> Nairobi, Kenya</p>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">News Letter</h2>
            <p>Stay Connected. Subscribe to our newsletter for offers and exciting updates!</p>
            <form className="flex flex-col md:flex-row mt-4">
              <input
                type="email"
                placeholder="Example: user@gmail.com"
                className="border p-2 rounded w-full md:w-1/2 mr-2"
                required
              />
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded mt-2 md:mt-0"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Stay Connected</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                <FaTiktok size={24} />
              </a>
            </div>
          </div>

          {/* Footer Section */}
          <footer className="mt-6 text-center">
            <p className="text-white text-2xl">Copyright © 2024 Josh’s Kitenge</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
