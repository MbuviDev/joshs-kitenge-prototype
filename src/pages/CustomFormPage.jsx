import React, { useState } from "react";
import customAnkaraImage1 from "../assets/IMG-20241104-WA0082.jpg"
import customAnkaraImage2 from "../assets/IMG-20241104-WA0047.jpg"
import customAnkaraImage3 from "../assets/IMG-20241104-WA0066.jpg"

const imageOptions = [
  { id: 1, src: customAnkaraImage1, alt: "Custom Ankara Fashion 1" },
  { id: 2, src: customAnkaraImage2, alt: "Custom Ankara Fashion 2" },
  { id: 3, src: customAnkaraImage3, alt: "Custom Ankara Fashion 3" },
];

function CustomAnkaraFashionOrders() {
  const [formData, setFormData] = useState({
    style: "",
    size: "",
    material: "",
    bust: "",
    waist: "",
    hips: "",
    height: "",
    comments: "",
    shipping: ""
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (direction) => {
    setCurrentImageIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return imageOptions.length - 1; // Loop to last image
      if (newIndex >= imageOptions.length) return 0; // Loop to first image
      return newIndex;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log("Submitted data:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row items-center p-8 mt-20">
      {/* Image Section */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <div className="relative">
          <img
            src={imageOptions[currentImageIndex].src}
            alt={imageOptions[currentImageIndex].alt}
            className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto"
          />
          <div className="absolute top-1/2 left-0 right-0 flex justify-between">
            <button
              onClick={() => handleImageChange(-1)}
              className="bg-gray-600 text-white p-2 rounded-full"
            >
              &lt;
            </button>
            <button
              onClick={() => handleImageChange(1)}
              className="bg-gray-600 text-white p-2 rounded-full"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="md:w-1/2 md:pl-6">
        <h2 className="text-2xl font-bold mb-4">Custom Ankara Fashion Orders</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Style Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="style">
              Choose Your Style
            </label>
            <select
              id="style"
              name="style"
              value={formData.style}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select a style</option>
              <option value="style1">Style 1</option>
              <option value="style2">Style 2</option>
              <option value="style3">Style 3</option>
            </select>
          </div>

          {/* Size Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="size">
              Size
            </label>
            <select
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select a size</option>
              <option value="S">S</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="2XL">2XL</option>
            </select>
          </div>

          {/* Material Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="material">
              Material
            </label>
            <select
              id="material"
              name="material"
              value={formData.material}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select a material</option>
              <option value="fabric">Fabric</option>
              <option value="cotton">Cotton</option>
            </select>
          </div>

          {/* Measurements */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="bust">
                Bust (cm)
              </label>
              <input
                type="number"
                id="bust"
                name="bust"
                value={formData.bust}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="e.g. 90"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="waist">
                Waist (cm)
              </label>
              <input
                type="number"
                id="waist"
                name="waist"
                value={formData.waist}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="e.g. 70"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="hips">
                Hips (cm)
              </label>
              <input
                type="number"
                id="hips"
                name="hips"
                value={formData.hips}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="e.g. 95"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="height">
                Height (cm)
              </label>
              <input
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="e.g. 170"
              />
            </div>
          </div>

          {/* Comments or Special Requests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="comments">
              Comments or Special Requests
            </label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows="3"
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Enter any comments or special requests"
            />
          </div>

          {/* Shipping Method Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="shipping">
              Shipping Method
            </label>
            <select
              id="shipping"
              name="shipping"
              value={formData.shipping}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select a shipping method</option>
              <option value="rush">Rush Shipping (within 14 days) - Ksh 3,000</option>
              <option value="standard">Standard Shipping (within 45 days) - Ksh 1,000</option>
            </select>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 rounded-md transition-colors duration-300"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomAnkaraFashionOrders;