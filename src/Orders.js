import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import { Products } from './Products'
import { auth, db } from './config/Config'
import './App.css';

export default function Orders() {
  const [products, setProducts] = useState([]);

  const getProducts = async ()=>{
    const products = await db.collection('Sweets').get();
    const productsArray = [];
    for (var snap of products.docs){
      var data = snap.data();
      data.ID = snap.ID;
      productsArray.push({
        ...data
      })
      if (productsArray.length === products.docs.length){
        setProducts(productsArray);
      }
    }
  }

  useEffect(()=>{
    getProducts();
  },[])

  return (
    <>
    <div className='App-header'>
        <Navbar />
        <br />
        <h1>ORDERS</h1>
        <br></br>
        <hr />      

        {products.length > 0 && (
          <div className='container'>
            <h1>Products</h1>
            <div className='products-box'>
              <Products products={products}/>
              </div>
          </div>
        )}
        {products.length < 1 && (
          <div className='container'>Please Wait....</div>
        )}
    </div>
    </>
  )
}
