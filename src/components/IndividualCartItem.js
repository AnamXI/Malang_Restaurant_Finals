import React from 'react'
import '../App.css';
import {auth, db} from '../config/Config';

export const IndividualCartItem = ({cartItem}) => {
  
  const handleDelete=()=>{
    auth.onAuthStateChanged(user=>{
        if(user){
            db.collection('Cart ' + user.id).doc(cartItem.ID).delete().then(()=>{
                console.log('Successfully Removed From Cart!');
            })
        }
    })
  }

    return  (
    <div className='fcard' style={{boxShadow:'none', height:'400px'}}>
      <img className='fcardimg'src={cartItem.ProductImg} alt='Food Showcase'/>
     
     <div style={{height:"80px"}}>
     <h3>{cartItem.qty}</h3>
     <h5>${cartItem.TotalProductPrice}.00</h5>
     <div style={{height:"80px"}}>
      <h4 style={{fontFamily: "KP, Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", fontSize: "clamp(24px, 2vw, 30px)"}}>{cartItem.ProductName}</h4>
      <p style={{fontSize: "clamp(20px, 2vw, 20px)"}}>{cartItem.ProductDesc}</p>
     </div>
      
      <button style={{backgroundColor: 'black', color: '#ffde59'}} onClick={handleDelete}><h3>DELETE</h3></button>
      </div>
      
    </div>
  )
}

