import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import db from '../firebase';

const ItemListContainer = () => {
  const location = useLocation();
  const category = location.pathname.split('/category/')[1];
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsFromData(category);
  }, [category]);

  const fetchProductsFromData = async (category) => {
    try {
      let querySnapshot;
      if (category) {
        querySnapshot = await db.collection('productos').where('categoria', '==', category).get();
      } else {
        querySnapshot = await db.collection('productos').get();
      }

      const productsData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h2>Lista de productos</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.imageURL} alt={product.producto} />
            <h3>{product.producto}</h3>
            {product.descripcion ? (
              <Link to={`/item/${product.id}`}>Ver más</Link>
            ) : (
              <p>Cargando detalle...</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;