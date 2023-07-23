const admin = require('firebase-admin');
const serviceAccount = require('./sdkFirebase.json');// Reemplaza con la ruta de tu archivo de credenciales

// Configura Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Reemplaza con los datos de tus productos
const productsData = [
    {
      producto: "Remera Roja",
      descripcion: "Una remera roja de algodón",
      precio: 15.99,
      stock: 50,
      imageURL: "https://example.com/remera_roja.jpg",
      categoria: "remeras",
    },
    {
      producto: "Pantalón Azul",
      descripcion: "Un pantalón azul cómodo",
      precio: 29.99,
      stock: 30,
      imageURL: "https://example.com/pantalon_azul.jpg",
      categoria: "pantalones",
    },
    {
      producto: "Campera Negra",
      descripcion: "Una campera negra impermeable",
      precio: 49.99,
      stock: 20,
      imageURL: "https://example.com/campera_negra.jpg",
      categoria: "camperas",
    },
    {
      producto: "Remera Estampada",
      descripcion: "Una remera con estampado floral",
      precio: 18.99,
      stock: 40,
      imageURL: "https://example.com/remera_estampada.jpg",
      categoria: "remeras",
    },
    {
      producto: "Pantalón Beige",
      descripcion: "Un pantalón beige de tela ligera",
      precio: 24.99,
      stock: 35,
      imageURL: "https://example.com/pantalon_beige.jpg",
      categoria: "pantalones",
    },
    {
      producto: "Campera de Cuero",
      descripcion: "Una campera de cuero elegante",
      precio: 79.99,
      stock: 15,
      imageURL: "https://example.com/campera_cuero.jpg",
      categoria: "camperas",
    },
    {
      producto: "Remera Negra",
      descripcion: "Una remera negra básica",
      precio: 12.99,
      stock: 60,
      imageURL: "https://example.com/remera_negra.jpg",
      categoria: "remeras",
    },
    {
      producto: "Pantalón Deportivo",
      descripcion: "Un pantalón deportivo cómodo",
      precio: 21.99,
      stock: 25,
      imageURL: "https://example.com/pantalon_deportivo.jpg",
      categoria: "pantalones",
    },
    {
      producto: "Campera de Invierno",
      descripcion: "Una campera de invierno abrigada",
      precio: 59.99,
      stock: 10,
      imageURL: "https://example.com/campera_invierno.jpg",
      categoria: "camperas",
    },
    {
      producto: "Remera Rayada",
      descripcion: "Una remera con rayas blancas y azules",
      precio: 16.99,
      stock: 45,
      imageURL: "https://example.com/remera_rayada.jpg",
      categoria: "remeras",
    },
  ];  

// Función para cargar los productos en Firestore
const loadProductsToFirestore = async () => {
  try {
    for (let i = 0; i < productsData.length; i++) {
      const product = { id: i + 1, ...productsData[i] };
      await db.collection('productos').doc(String(i + 1)).set(product);
      console.log(`Producto agregado con ID: ${i + 1}`);
    }
    console.log('Carga de productos completada.');
  } catch (error) {
    console.error('Error al cargar productos:', error);
  }
};

loadProductsToFirestore();