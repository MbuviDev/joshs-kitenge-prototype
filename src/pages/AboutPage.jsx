import React from "react";
import { FaLeaf, FaHeart, FaHandHoldingHeart } from "react-icons/fa";
import userPhoto from '../assets/IMG_3531.JPG'; // Update with the correct image path

function AboutPage() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Top Section: Intro and Vision */}
      <div className="text-center bg-sky-100 p-6 rounded-lg shadow-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg font-semibold mb-4">
          Josh’s Kitenge offers premium African cotton fabrics with stunning
          designs. Experience the quality of Kitenge/Ankara while supporting
          Kenyan families. Fashion with Compassion.
        </p>
        <h2 className="text-2xl font-semibold mt-4">
          Explore Our Impact and Vision
        </h2>
        <p className="mt-2">
          At Josh’s Kitenge, we proudly offer premium African cotton fabric
          known as Kitenge/Ankara and support Kenyan communities. We donate a
          significant portion of our profits to help establish Kenyan small
          businesses and to aid disabled and poverty-stricken children.
        </p>
      </div>

      {/* Hover Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Section 1 */}
        <div className="p-8 rounded-lg shadow-lg bg-sky-200 transition-colors duration-300 hover:bg-sky-400 hover:text-white text-center">
          <FaLeaf className="mx-auto text-4xl mb-4" />
          <h3 className="text-xl font-semibold">High Quality</h3>
          <p>Cotton Fabrics where Fashion meets Compassion</p>
          <p className="mt-4">
            African fabrics are truly remarkable! Their vibrant colors, which
            are bright on both sides, make them stand out. Plus, their
            durability and minimal shrinkage ensure they last a long time. The
            fade-resistant quality and unique designs add to their charm, making
            them perfect for various uses.
          </p>
        </div>

        {/* Section 2 */}
        <div className="p-8 rounded-lg shadow-lg bg-sky-200 transition-colors duration-300 hover:bg-sky-400 hover:text-white text-center">
          <FaHeart className="mx-auto text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Authentic Support for Kenya</h3>
          <p>
            Get your Authentic Kitenge/Ankara Fabrics Online! Changing Lives in
            Kenya, One Donation at a Time
          </p>
          <p className="mt-4">
            Welcome to our collection of premium Kitenge/Ankara fabrics from
            Nairobi, Kenya. We pride ourselves on offering only the best quality
            fabrics. While we specialize in cotton, we offer a lot more! Our
            mission is to empower Kenyan communities and small businesses to
            thrive. We wholeheartedly support verified charities in Kenya that
            make a positive impact on the lives of disabled and poverty-stricken
            children. By donating a portion of our earnings, we are able to
            provide hope, opportunities, and brighter futures for those in need.
          </p>
        </div>

        {/* Section 3 */}
        <div className="p-8 rounded-lg shadow-lg bg-sky-200 transition-colors duration-300 hover:bg-sky-400 hover:text-white text-center">
          <FaHandHoldingHeart className="mx-auto text-4xl mb-4" />
          <h3 className="text-xl font-semibold">Empowering Communities</h3>
          <p>
            Our mission is to empower Kenyan communities and small businesses to
            thrive. We support verified charities, providing hope and brighter
            futures.
          </p>
          <p className="mt-4">
            Our mission is to empower Kenyan communities and small businesses to
            thrive. We wholeheartedly support verified charities in Kenya that
            are making a positive impact on the lives of disabled and
            poverty-stricken children. By donating a portion of our earnings, we
            are able to provide hope, opportunities, and brighter futures for
            those in need.
          </p>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-white rounded-lg shadow-lg p-4 md:p-8 mt-8">
        {/* Left: User Photo */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
          <img 
            src={userPhoto} 
            alt="User" 
            className="w-24 h-24 rounded-full object-cover mx-auto" 
          />
        </div>

        {/* Right: Testimonial Text */}
        <div className=" text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Josh’s Kitenge always has the best selection!</h3>
          <p className="text-gray-700 mb-2">
            Let's spread love and positively impact the underprivileged community!
          </p>
          <p className="text-gray-700">
            With Josh's Kitenge, we believe fashion can change lives.
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default AboutPage;
