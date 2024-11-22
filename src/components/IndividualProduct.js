import React from 'react'
import '../App.css';

////Individual Product Component for how each product will be displayed
export const IndividualProduct = ({individualProduct, addToCart}) => {

  const handleAddToCart=()=>{
    addToCart(individualProduct);
  }

    return (
    <div className='fcard'>
      <img className='fcardimg'src={individualProduct.ProductImg} alt='Food Showcase'/>
     
     <div style={{height:"80px"}}>
      <h4 style={{fontFamily: "KP, Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", fontSize: "clamp(24px, 2vw, 30px)"}}>{individualProduct.ProductName}</h4>
      <p style={{fontSize: "clamp(20px, 2vw, 20px)"}}>{individualProduct.ProductDesc}</p>
      </div>
      
      {/*Price Tag also functions as Add To Cart Button*/}
      <button onClick={handleAddToCart}><h3>${individualProduct.ProductPrice}.00</h3></button>
    </div>
  )
}


