import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import { Products } from './Products'
import { auth, db } from './config/Config'
import './App.css';

export default function Orders() {
  const [pinoy, setPinoy] = useState([]);
  const [indian, setIndian] = useState([]);
  const [sweets, setSweets] = useState([]);
  const [drinks, setDrinks] = useState([]);

////Gets The Sweets Menu
const getPinoy = async ()=>{
  const pinoy = await db.collection('Pinoy').get();
  const pinoyArray = [];
  for (var snap of pinoy.docs){
    var data = snap.data();
    data.ID = snap.ID;
    pinoyArray.push({
      ...data
    })
    if (pinoyArray.length === pinoy.docs.length){
      setPinoy(pinoyArray);
    }}}

////Gets The Sweets Menu
  const getSweets = async ()=>{
    const sweets = await db.collection('Sweets').get();
    const sweetsArray = [];
    for (var snap of sweets.docs){
      var data = snap.data();
      data.ID = snap.ID;
      sweetsArray.push({
        ...data
      })
      if (sweetsArray.length === sweets.docs.length){
        setSweets(sweetsArray);
      }}}

      


//BORDER///////////////////////////////////////////////
  useEffect(()=>{
    getPinoy();
    getSweets();
  },[])

  return (
    <>
    <div className='App-header'>
        <Navbar />
        <br />
        <h1>ORDERS</h1>
        <br></br>
        <hr />      

        {sweets.length > 0 && (
          <div>
            <h1>Products</h1>
            <div className='cardbox'>
              <Products products={sweets}/>
              </div>
          </div>
        )}
        {sweets.length < 1 && (
          <div>Please Wait....</div>
        )}
    </div>
    </>
  )
}
