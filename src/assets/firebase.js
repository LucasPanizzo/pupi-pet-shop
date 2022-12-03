import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, getDoc, doc,updateDoc,deleteDoc} from "firebase/firestore"


const firebaseConfig = {
  apiKey: process.env.API_KEY, 
  authDomain: "pupi---pet-store.firebaseapp.com",
  projectId: "pupi---pet-store",
  storageBucket: "pupi---pet-store.appspot.com",
  messagingSenderId: "206225731261",
  appId: "1:206225731261:web:12406fc00c73e3039bd1d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const loadDB = async () => {
  const promise = await fetch('./json/products.json')
  const products = await promise.json()
  products.forEach(async (prod) => {
    await addDoc(collection(db, "products"), {
      nombre: prod.nombre,
      precio: prod.precio,
      img: prod.img,
      categoria: prod.categoria,
      stock: prod.stock
    })
  })
}

const createProduct = async (objProduct) => {
  const state = await addDoc(collection(db, "products"), {
    nombre: objProduct.nombre,
    precio: objProduct.precio,
    img: objProduct.img,
    categoria: objProduct.categoria,
    stock: objProduct.stock
  })

  return state
}

const getProducts = async () =>{
  const products = await getDocs(collection(db,"products"))
  const items = products.docs.map(prod => {
    return {...prod.data(), id:prod.id}
  })
  return items
}

const getProduct = async (id) => {
  const prod = await getDoc(doc(db, "products",id))
  const item = {...prod.data(), id: prod.id}
  return item
}

const updateProduct = async(id, info) => {
  const state = await updateDoc(doc(db, "products",id), info)
  return state
}

const deleteProduct = async(id) => {
  const state = await deleteDoc(doc(db,"products", id))
  return state
}

//CREATE AND READ ORDENES DE COMPRA

const createBuyOrder = async (order,client,totalPri, date) => {
  const buyOrder = await addDoc(collection(db, "buyOrders"), {
      nombre: client.nombre,
      email: client.email,
      dni: client.dni,
      direccion: client.direccion,
      celular: client.celular,
      fecha: date,
      precio: totalPri,
      order: order
  })

  return buyOrder
}

const getBuyOrder = async(id) => {
  const item = await getDoc(doc(db, "buyOrders", id))
  const buyOrder = {...item.data(), id: item.id}
  return buyOrder
}
export {loadDB,getProducts,getProduct,createProduct,updateProduct,deleteProduct,createBuyOrder,getBuyOrder}