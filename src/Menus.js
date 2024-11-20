import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Modal from './Modal';


function Menus() {
  const [isOpen, setIsOpen] = useState(false); //Opens Modals
  const [mContent, setMcontent] = useState(); //Sets Content Of Menu Modals

  return (
    <div className="App">
      <header className="App-header">

        <Navbar />    

        {/*MAIN MENUS*/}
        <section className="container" style={{backgroundImage: `url("assets/menusbg.png")`, backgroundSize: "cover", color: "black", padding: "100px 0px 200px 0px"}} >
            <h1 style={{fontSize: "calc(20px + 4vw)"}}>Explore Our Various Flavors!</h1>

            <div className="cardbox">

                  {/*PINOY MENU MODAL*/}
                  <div className="card">
                    <button className="cardimg" style={{backgroundImage: `url("assets/mpinoy.png")`}}
                    onClick={function() {setIsOpen(true); setMcontent(
                      <>
                        <h1>Hatdog</h1>
                        <h4>Cheesedog</h4>
                      </>
                    )}}></button>
                    <h2>Pinoy</h2>
                    <h4>Hello</h4>
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
                    <h2>Indian</h2>
                    <h4>Hello</h4>
                  </div>

                  {/*SWEETS MENU MODAL*/}
                  <div className="card">
                    <button className="cardimg" style={{backgroundImage: `url("assets/msweets.png")`}}
                    onClick={function() {setIsOpen(true); setMcontent(
                      <>
                        <h1>IceCream</h1>
                        <h4>IceyIceyIceCream</h4>
                      </>
                    )}}></button>
                    <h2>Sweets</h2>
                    <h4>Hello</h4>
                  </div>

                  {/*DRINKS MENU MODAL*/}
                  <div className="card">
                    <button className="cardimg" style={{backgroundImage: `url("assets/mdrinks.png")`}}
                    onClick={function() {setIsOpen(true); setMcontent(
                      <>
                        <h1>AHAHAHAHA</h1>
                        <h4>Ailurophile Azile</h4>
                      </>
                    )}}></button>
                    <h2>Drinks</h2>
                    <h4>Hello</h4>
                  </div>

            </div>          
        </section>

        <br></br>
        <button onClick={() => setIsOpen(true)}>HIIIIII</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <h1>{mContent}</h1>
        </Modal>

      </header>
    </div>
  );
}

export default Menus;
