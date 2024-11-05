import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import KitengeFabricPage from './pages/KitengeFabricPage';
import CustomFormPage from './pages/CustomFormPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };
  return (
    <Router>
        <Navbar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element= {<Checkout cartItems={cartItems}  />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/kitenge-fabric" element={<KitengeFabricPage />} />
        <Route path="/custom-order" element={<CustomFormPage />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
