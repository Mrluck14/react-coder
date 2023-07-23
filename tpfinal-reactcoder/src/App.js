import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './css/Navbar.css';
import './css/ItemListContainer.css';
import './css/ItemDetailContainer.css';
import ShoppingCart from './components/shoppingCart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleEmptyCart = () => {
    setCartItems([]);
  };

  // Función para agregar productos al carrito
  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <Router>
      <div>
        <Navbar cartItems={cartItems} /> {/* Pasa cartItems como prop al componente Navbar */}
        <Routes>
          {/* Pasa handleAddToCart como prop al componente ItemDetailContainer */}
          <Route path="/" element={<ItemListContainer handleAddToCart={handleAddToCart} />} />
          <Route path="/category/:id" element={<ItemListContainer handleAddToCart={handleAddToCart} />} />
          <Route
            path="/item/:id"
            element={<ItemDetailContainer handleAddToCart={handleAddToCart} cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route path="/shopping-cart" element={<ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App