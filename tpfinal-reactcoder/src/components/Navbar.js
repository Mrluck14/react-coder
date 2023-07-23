import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItems }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/remeras">Remeras</Link></li>
        <li><Link to="/category/pantalones">Pantalones</Link></li>
        <li><Link to="/category/camperas">Camperas</Link></li>
        {/* Muestra la cantidad de elementos en el carrito */}
        <li><Link to="/shopping-cart">Carrito</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
