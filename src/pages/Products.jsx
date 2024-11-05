import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import kiteng from "../assets/16e39387-7284-4ebb-a13b-b6005d32bf6a.jpg";
import kiteng2 from "../assets/96299f23-a310-470b-ba2e-ca5f76b15c60.jpg";
import kiteng3 from "../assets/IMG-20241104-WA0171.jpg";
import kiteng4 from "../assets/IMG-20241104-WA0185.jpg";
import kiteng5 from "../assets/IMG-20241104-WA0094.jpg";
import kiteng6 from "../assets/5eba24e6-4c61-413c-a02b-900bb099b93c.jpg";
import kiteng7 from "../assets/IMG-20241104-WA0095.jpg";
import kiteng8 from "../assets/IMG-20241104-WA0096.jpg";
import kiteng9 from "../assets/IMG-20241104-WA0098.jpg";
import kiteng10 from "../assets/IMG-20241104-WA0100.jpg";
import kiteng11 from "../assets/IMG-20241104-WA0101.jpg";
import kiteng12 from "../assets/IMG-20241104-WA0123.jpg";
import kiteng13 from "../assets/IMG-20241104-WA0124.jpg";
import kiteng14 from "../assets/IMG-20241104-WA0139.jpg";

const productsData = [
  { id: 1, title: "Kitenge Ankara, African Wax Print Cotton Fabric", price: "KSh7,740.00", image: kiteng },
  { id: 2, title: "Kitenge Ankara, African Wax Print Cotton Fabric", price: "KSh7,740.00", image: kiteng2 },
  { id: 3, title: "Kitenge Ankara, African Wax Print Cotton Fabric", price: "KSh7,740.00", image: kiteng3 },
  { id: 4, title: "Kitenge Ankara, African Wax Print Cotton Fabric", price: "KSh7,740.00", image: kiteng4 },
  { id: 5, title: "Kitenge Ankara, African Wax Print Cotton Fabric", price: "KSh7,740.00", image: kiteng5 },
  { id: 6, title: "Kitenge Ankara, African Wax Print Cotton Fabric", price: "KSh7,740.00", image: kiteng6 },
  { id: 7, title: "Kitenge Ankara, African Wax Print Cotton Fabric", price: "KSh7,740.00", image: kiteng7 },
  { id: 8, title: "Kitenge Ankara, African Wax Print Cotton Fabric", price: "KSh7,740.00", image: kiteng8 },
  { id: 9, title: "Kitenge Ankara, African Wax Print Cotton Fabric", price: "KSh7,740.00", image: kiteng9 },
  { id: 10, title: "Kitenge Ankara, African Wax Print Cotton Fabric", price: "KSh7,740.00", image: kiteng10 },
  { id: 11, title: "Kitenge Ankara, African Wax Print Cotton Fabric", price: "KSh7,740.00", image: kiteng11 },
  { id: 12, title: "Kitenge Ankara, African Wax Print Cotton Fabric", price: "KSh7,740.00", image: kiteng12 },
  { id: 13, title: "Kitenge Ankara, African Wax Print Cotton Fabric", price: "KSh7,740.00", image: kiteng13 },
  { id: 14, title: "Kitenge Ankara, African Wax Print Cotton Fabric", price: "KSh7,740.00", image: kiteng14 },
];

function Products() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center">Products</h2>
      <div className="text-center text-xl mt-6">
        <Link to="/kitenge-fabric" className="text-blue-600 hover:underline font-semibold mr-4">
          Kitenge Fabrics
        </Link>
        <Link to="/custom-order" className="text-blue-600 hover:underline font-semibold">
          Custom Kitenge
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {productsData.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
