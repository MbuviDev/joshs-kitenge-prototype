import React from "react";

function IntroSection() {
  return (
    <div className="bg-gradient-to-b from-sky-100 to-white py-8 px-4 md:px-16 text-center mt-24 rounded-lg shadow-md">
      <h1 className="text-2xl md:text-4xl font-bold text-black">
        African Cotton Fabric: Discover Vibrant Kitenge/Ankara Designs
      </h1>
      <p className="text-base md:text-lg text-gray-700 mt-4 leading-relaxed">
        Elevate Your Crafting and Style with Josh’s Kitenge. Where{" "}
        <span className="font-semibold italic">“Fashion with Compassion”</span>{" "}
        is our motto.
        <br />
        We sell only the highest quality Cotton Fabrics. Are you looking for
        specific types of fabrics or patterns for your next project?
      </p>
      {/* Optional Call-to-Action
      <div className="mt-6">
        <button className="bg-sky-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-sky-600 transition duration-300 shadow-md">
          Explore Products
        </button>
      </div> */}
    </div>
  );
}

export default IntroSection;
