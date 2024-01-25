import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, addDoc, getDoc, getDocs, updateDoc, deleteDoc} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "ecommerce-servicios.firebaseapp.com",
  projectId: "ecommerce-servicios",
  storageBucket: "ecommerce-servicios.appspot.com",
  messagingSenderId: "701439262877",
  appId: "1:701439262877:web:a8e12719cf7cf208bd1474"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore() //Consultar la BDD

//PARA CREAR PRODUCTOS
export const cargarBDD = async () =>{
    const promise = await fetch('./json/servicios.json')
    const productos = await promise.json() //Esto me devuelve un array
    productos.forEach(async (prod) => {
      await addDoc(collection(db, "productos"), {
        //Los datos de la BDD están alojados en Prod, que vienen del archivo JSON y los llamo aquí. 
  
        idCategoria: prod.idCategoria,
        nombre: prod.nombre,
        descripcion: prod.descripcion,/* 
        minFilm: prod.minFilm,
        minHighlights: prod.minHighlights,
        fotos: prod.fotos, */
        producto: prod.producto, 
        preparativos: prod.preparativos,
        horasCobertura: prod.horasCobertura,
        equipo: prod.equipo,
        entrega: prod.entrega,
        valorNormal: prod.valorNormal,
        stock: prod.stock,
        img: prod.img
      })
    })
  }

export const getProductos = async() => {
    const productos = await getDocs(collection(db,"productos"))
    const items = productos.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    return items
}
export const getProducto = async(id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const item = {...producto.data(), id: producto.id}
    return item
}

export const updateProducto = async(id, info) => {
    await updateDoc(doc(db, "productos", id), info)
}

export const deleteProducto = async(id) => {
    await deleteDoc(doc(db, "productos", id))
}

//Crear Orden Compra

export const createOrdenCompra = async(cliente, productos,precioTotal, fecha) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
      datosCliente: cliente,
      productos: productos,
      precioTotal: precioTotal, 
      fecha: fecha
  })
  return ordenCompra
}
export const getOrdenCompra = async(id) => {
  const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
  const oCompra = {...ordenCompra.data(), id: ordenCompra.id}
  return oCompra
} 