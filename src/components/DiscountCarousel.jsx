import React, { useState, useEffect } from "react";
import kitenge from "../assets/e7b4417b-26a9-4c9e-9ca6-687c8858dbaf.jpg";
import kitenge2 from "../assets/IMG-20241104-WA0185.jpg"
import kitenge3 from "../assets/IMG-20241104-WA0171.jpg"

const discountProducts = [
  {
    id: 1,
    image: kitenge,
    title: "Kitenge / Ankara, African Wax Print Cotton Fabric",
    discountDates: "15th Oct - 30th Nov",
    description: "This Kitenge Ankara fabric features yellow and red swirling patterns reminiscent of flowers, ideal for any craft project.",
    originalPrice: "Ksh 7,740",
    discountPrice: "Ksh 5,500",
  },
  {
    id: 2,
    image: kitenge2,
    title: "Kitenge / Ankara, African Wax Print Cotton Fabric",
    discountDates: "15th Oct - 30th Nov",
    description: "This Kitenge Ankara fabric features yellow and red swirling patterns reminiscent of flowers, ideal for any craft project.",
    originalPrice: "Ksh 8,990",
    discountPrice: "Ksh 6,500",
  },
  {
    id: 3,
    image: kitenge3,
    title: "Kitenge / Ankara, African Wax Print Cotton Fabric",
    discountDates: "15th Oct - 30th Nov",
    description: "This Kitenge Ankara fabric features yellow and red swirling patterns reminiscent of flowers, ideal for any craft project.",
    originalPrice: "Ksh 9,900",
    discountPrice: "Ksh 7,500",
  },
];

function DiscountCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically go to the next discount every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % discountProducts.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Navigate to the previous product
  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? discountProducts.length - 1 : prevIndex - 1));
  };

  // Navigate to the next product
  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % discountProducts.length);
  };

  const product = discountProducts[currentIndex];

  return (
    // <div className="relative bg-sky-300 p-6 rounded-lg shadow-lg text-center mt-4">
    <div className="p-8 rounded-lg shadow-lg bg-sky-200 transition-colors duration-300 hover:bg-sky-400 hover:text-white text-center">
      <div className="flex items-center space-x-4">

        {/* Previous Button */}
        <button onClick={prevProduct} className="text-2xl text-gray-600 hover:text-gray-800">
          &#60;
        </button>

        {/* Product Image on the Left */}
        <div className="w-1/2 shadow">
          <img src={product.image} alt={product.title} className="w-full h-60 object-contain rounded-lg" />
        </div>

        {/* Product Details on the Right */}
        <div className="w-1/2 text-left text-gray-800 p-4">
          <p className="text-red-600 font-bold text-xl">Discount !! ({product.discountDates})</p>
          <h2 className="text-xl font-bold mt-2">{product.title}</h2>
          <p className="mt-2 text-sm">{product.description}</p>
          <div className="mt-4">
            <span className="line-through text-gray-500 mr-2">{product.originalPrice}</span>
            <span className="text-green-600 font-bold">{product.discountPrice}</span>
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-400 text-white font-semibold rounded hover:bg-blue-600">
            SHOP NOW
          </button>
        </div>

        {/* Next Button */}
        <button onClick={nextProduct} className="text-2xl text-gray-600 hover:text-gray-800">
          &#62;
        </button>
      </div>
    </div>
  );
}

export default DiscountCarousel;
