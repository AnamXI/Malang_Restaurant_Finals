import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Modal from './Modal';
import { Products } from './Products'
import { auth, db } from './config/Config'
import Orders from './Orders';




export default function Menus() {
  const [isOpen, setIsOpen] = useState(false); //Opens Modals
  const [mContent, setMcontent] = useState(); //Sets Content Of Menu Modals

  const [pinoy, setPinoy] = useState([]);
  const [indian, setIndian] = useState([]);
  const [sweets, setSweets] = useState([]);
  const [drinks, setDrinks] = useState([]);

  ////Gets The Pinoy Menu
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


////Retrieve Menus & Arrays
useEffect(()=>{
  getPinoy();
  getSweets();
},[])

////Page Proper
  return (
    <div className="App">
      <header className="App-header">

        <Navbar />    

        {/*MAIN MENUS*/}
        <section className="container" style={{backgroundImage: `url("assets/menusbg.png")`, backgroundSize: "cover", color: "black", padding: "120px 0px 200px 0px", height: "100vh"}} >
            <h1 style={{fontSize: "calc(20px + 4vw)"}}>Explore Our Various Flavors!</h1>

            <div className="cardbox">

                  {/*PINOY MENU MODAL*/}
                  <div className="card">
                    <button className="cardimg" style={{backgroundImage: `url("assets/mpinoy.png")`}}
                    onClick={function() {setIsOpen(true); setMcontent(
                      <>
                        <h1>PINOY</h1>
                        <h4>Foods Menu</h4>
                      </>
                    )}}></button>
                    <h2>Pinoy</h2>
                    <h4>Dishes</h4>
                  </div>
                  
                  {/*INDIAN MENU MODAL*/}
                  <div className="card">
                    <button className="cardimg" style={{backgroundImage: `url("assets/mindian.png")`}}
                    onClick={function() {setIsOpen(true); setMcontent(
                      <>
                        <h1>JALIJALI</h1>
                        <h4>Jalebi JaliJali</h4>
                      </>
                    )}}></button>
                    <h2>INDIAN</h2>
                    <h4>Foods Menu</h4>
                  </div>

                  {/*SWEETS MENU MODAL*/}
                  <div className="card">
                    <button className="cardimg" style={{backgroundImage: `url("assets/msweets.png")`}}
                    onClick={function() {setIsOpen(true); setMcontent(
                      <>

                        {sweets.length > 0 && (
                            <div>
                              <div className='fcardbox'>
                                <Products products={sweets}/>
                                </div>
                            </div>
                          )}
                          {sweets.length < 1 && (
                            <div>Please Wait....</div>
                          )}

                      </>
                    )}}></button>
                    <h2>Sweets</h2>
                    <h4>& Desserts</h4>
                  </div>

                  {/*DRINKS MENU MODAL*/}
                  <div className="card">
                    <button className="cardimg" style={{backgroundImage: `url("assets/mdrinks.png")`}}
                    onClick={function() {setIsOpen(true); setMcontent(
                      <>
                        <h1>DRINKS</h1>
                        <h4>& Alcohol</h4>
                      </>
                    )}}></button>
                    <h2>Drinks</h2>
                    <h4>& Alcohol</h4>
                  </div>

            </div>
            <br></br>          
        </section>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <h1>{mContent}</h1>
        </Modal>

      </header>
    </div>
  );
}


