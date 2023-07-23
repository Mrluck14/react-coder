import React from 'react';

// Estilos CSS para el componente ShoppingCart
const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    borderBottom: '2px solid #ccc',
    padding: '8px',
    textAlign: 'left',
  },
  td: {
    borderBottom: '1px solid #ccc',
    padding: '8px',
    textAlign: 'left',
  },
  img: {
    width: '50px',
    height: '50px',
  },
  button: {
    backgroundColor: '#ff0000',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

const ShoppingCart = ({ cartItems, setCartItems }) => {
  const handleEmptyCart = () => {
    setCartItems([]);
  };

  const handleFinalizarCompra = () => {
    const orderNumber = generateOrderNumber();
    const orderDetail = cartItems.map((item) => `${item.producto} - Cantidad: ${item.quantity}`).join('\n');

    alert(`Detalle de la compra:\n${orderDetail}\n\nNúmero de orden de compra: ${orderNumber}`);
  };

  const generateOrderNumber = () => {
    // Aquí puedes implementar la lógica para generar un número de orden de compra autonumérico
    // Puedes usar un contador, una función de generación de números aleatorios, etc.
    // Por simplicidad, en este ejemplo, usaremos un número aleatorio entre 1000 y 9999
    return Math.floor(Math.random() * 9000) + 1000;
  };

  return (
    <div style={styles.container}>
      <h2>Shopping Cart</h2>
      <div>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Producto</th>
              <th style={styles.th}>Imagen</th>
              <th style={styles.th}>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td style={styles.td}>{item.producto}</td>
                <td style={styles.td}>
                  <img src={item.imageURL} alt={item.producto} style={styles.img} />
                </td>
                <td style={styles.td}>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button style={styles.button} onClick={handleEmptyCart}>
          Vaciar Carrito
        </button>
        <button onClick={handleFinalizarCompra}>Finalizar Compra</button>
      </div>
    </div>
  );
};

export default ShoppingCart;