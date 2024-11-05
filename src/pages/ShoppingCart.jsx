import React, { useState } from "react";
import ankara from "../assets/IMG-20241104-WA0098.jpg"
import ankara1 from "../assets/IMG-20241104-WA0100.jpg"
import { Link } from "react-router-dom";

const initialProducts = [
  {
    id: 1,
    name: "Kitenge Ankara, African Wax Print Cotton Fabric",
    price: 7740,
    image: ankara,
  },
  {
    id: 2,
    name: "Custom Kitenge Fashion Fabric",
    price: 8740,
    image: ankara1,
  },
];

const initialCartItems = [];

const ShippingOptions = [
  { id: 1, method: "Rush Shipping (5-7 days)", cost: 3000 },
  { id: 2, method: "Standard Shipping (30 days)", cost: 1000 },
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [shippingMethod, setShippingMethod] = useState(ShippingOptions[0]);
  const [notification, setNotification] = useState("");

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setNotification(`Added ${product.name} to the cart!`);
    setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() + (shippingMethod ? shippingMethod.cost : 0);
  };

  return (
    <div className="container mx-auto p-6 mt-8">
      {notification && (
        <div className="bg-green-100 text-green-800 p-2 rounded mb-4">
          {notification}
        </div>
      )}
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {initialProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded mb-2" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p>KSh {product.price.toLocaleString()}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 rounded-md transition-colors duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="flex">
        <div className="w-2/3 pr-4">
          <h2 className="text-lg font-semibold">Products</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4 border-b pb-2">
              <div className="flex-1 flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                  <p>{item.name}</p>
                  <p>KSh {item.price.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 bg-gray-200 rounded-md">-</button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 bg-gray-200 rounded-md">+</button>
                <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500">Remove</button>
              </div>
              <p>KSh {(item.price * item.quantity).toLocaleString()}</p>
            </div>
          ))}
          <h2 className="text-lg font-semibold mt-4">Shipping Method:</h2>
          {ShippingOptions.map((option) => (
            <div key={option.id} className="flex items-center mb-2">
              <input
                type="radio"
                id={`shipping-${option.id}`}
                name="shipping"
                value={option.id}
                checked={shippingMethod.id === option.id}
                onChange={() => setShippingMethod(option)}
              />
              <label htmlFor={`shipping-${option.id}`} className="ml-2">{option.method} - Ksh {option.cost.toLocaleString()}</label>
            </div>
          ))}
        </div>
        <div className="w-1/3 pl-4 border-l">
          <h2 className="text-lg font-semibold mb-2">Cart Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>KSh {calculateSubtotal().toLocaleString()}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>KSh {shippingMethod.cost.toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>KSh {calculateTotal().toLocaleString()}</span>
          </div>
          <button
            className="mt-4 w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 rounded-md"
            onClick={() => console.log("Proceed to Checkout")}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;