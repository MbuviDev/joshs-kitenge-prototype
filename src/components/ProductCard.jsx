// src/components/ProductCard.jsx
import React from "react";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 transition-transform transform hover:scale-105 hover:bg-blue-200 hover:text-blue-800 cursor-pointer">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-bold">{product.title}</h3>
      <p className="text-gray-500 mt-2">{product.price}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

