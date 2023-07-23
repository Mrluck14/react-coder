import React from 'react';
import { useParams } from 'react-router-dom';

const ProductoDetalle = () => {
  const { id } = useParams();

  // Obtén los datos del producto desde una API o utiliza datos de ejemplo
  const producto = {
    id: 1,
    titulo: 'Ejemplo de producto',
    precio: 100,
    descripcion: 'Este es un ejemplo de producto en detalle',
    imagen: 'https://ejemplo.com/imagen-producto.jpg',
  };

  return (
    <div>
      <h2>Detalle del producto {id}</h2>
      <div>
        <img src={producto.imagen} alt={producto.titulo} />
        <h3>{producto.titulo}</h3>
        <p>Precio: ${producto.precio}</p>
        <p>{producto.descripcion}</p>
      </div>
    </div>
  );
};

export default ProductoDetalle;