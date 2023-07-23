import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Lista de productos
  const productos = [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' }
  ];

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/catalogo">Catálogo</Link>
          <ul> {/* Menú desplegable */}
            {productos.map(producto => (
              <li key={producto.id}>
                <Link to={`/catalogo/${producto.id}`}>{producto.nombre}</Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      <div>
        <i className="fas fa-shopping-cart"></i> {/* Icono de carrito */}
      </div>
    </nav>
  );
};

export default Navbar;