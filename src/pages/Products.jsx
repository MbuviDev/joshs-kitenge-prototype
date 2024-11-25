import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import API_BASE_URL from "../config/apiConfig";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (product) => {
    try {
      const token = localStorage.getItem("token"); // Get the user's token
      if (!token) {
        alert("Please log in to add items to your cart.");
        return;
      }

      const response = await axios.post(
        `${API_BASE_URL}/cart`,
        { productId: product._id, quantity: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Product added to cart successfully!");
      console.log("Cart Response:", response.data);
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add product to cart.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-semibold">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center">Products</h2>
      <div className="text-center text-xl mt-6">
        <Link
          to="/kitenge-fabric"
          className="text-blue-600 hover:underline font-semibold mr-4"
        >
          Kitenge Fabrics
        </Link>
        <Link
          to="/custom-order"
          className="text-blue-600 hover:underline font-semibold"
        >
          Custom Kitenge
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Products;
