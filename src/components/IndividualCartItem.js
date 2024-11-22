import React from 'react'
import '../App.css';

export const IndividualCartItem = ({cartItem}) => {
  return  (
    <div className='fcard'>
      <img className='fcardimg'src={cartItem.ProductImg} alt='Food Showcase'/>
     
     <div style={{height:"80px"}}>
      <h4 style={{fontFamily: "KP, Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", fontSize: "clamp(24px, 2vw, 30px)"}}>{cartItem.ProductName}</h4>
      <p style={{fontSize: "clamp(20px, 2vw, 20px)"}}>{cartItem.ProductDesc}</p>
      </div>
      
    </div>
  )
}

