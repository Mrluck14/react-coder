import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import db from '../firebase';
import CounterProducts from './counterProducts';
import ShoppingCart from './shoppingCart';

const ItemDetailContainer = ({ handleAddToCart, cartItems, setCartItems }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProductDetailsFromFirestore(id);
  }, [id]);

  const fetchProductDetailsFromFirestore = async (productId) => {
    try {
      const docSnapshot = await db.collection('productos').doc(productId).get();
      if (docSnapshot.exists) {
        setProduct({ id: docSnapshot.id, ...docSnapshot.data() });
      } else {
        console.log('Producto no encontrado');
      }
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCartClick = () => {
    // Pasamos directamente los datos del producto y la cantidad seleccionada
    addToCart(product, quantity);
  };

  const addToCart = (product, quantity) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === existingProduct.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity }]);
    }
  };

  const handleEmptyCart = () => {
    setCartItems([]);
  };

  console.log(cartItems);

  return (
    <div>
      <h2>Product Detail</h2>
      {product ? (
        <div className="product-detail">
          <img src={product.imageURL} alt={product.producto} />
          <h3>{product.producto}</h3>
          <p>{product.descripcion}</p>
          <p>Precio: ${product.precio}</p>
          <p>Stock: {product.stock} unidades</p>
          <CounterProducts quantity={quantity} onQuantityChange={handleQuantityChange} />

          {/* Modifica el botón "Comprar" para agregar el producto al carrito con la cantidad seleccionada */}
          <button onClick={handleAddToCartClick}>Comprar</button>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
