import React, {useEffect, useState} from 'react'
import { Navbar } from './Navbar'
import { auth, db } from './config/Config'
import './App.css';
import { OrderItems } from './OrderItems';
import { useNavigate } from 'react-router-dom';

export const Orders = ({ users }) => {
 
  //Get Current User
  function GetCurrentUser(){
    const [user, setUser]=useState(null);
    useEffect(()=>{
      auth.onAuthStateChanged(user=>{
        if(user){
          db.collection('RegisteredUsers').doc(user.uid).get().then(snapshot=>{
            setUser(snapshot.data().Name);
          })
        }
        else{
          setUser(null);
        }
      })
    },[])
    return user;
  }

////Gets User, Initializes Cart Items Array & useNavigate
  const user = GetCurrentUser();
  const [cartItems, setCartItems] = useState([]);
  const Navigate = useNavigate();
  const [userid, setUserID] = useState('');

////Fills in Cart Items Array. Checks if user is still logged in (as logout button is instant)
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        db.collection('Cart ' + user.id).onSnapshot(snapshot=>{
          const newCartProduct = snapshot.docs.map((doc)=>({
            ID: doc.id,
            ...doc.data(),
          }));
          setCartItems(newCartProduct);
        })
      }else{
        Navigate('/');
      }
    })
  },[])

////To check, possible for the presentation.
 console.log({cartItems});

  return (
    <>
    <div className='App-header'style={{backgroundImage:`url("assets/mainbr.png")`}}>
        <Navbar user={users}/>
        <br/>         
        {cartItems.length > 0 && (
          <div style={{width: '80%', height:'100%'}}>
            <h1>Ordered Items</h1> <hr style={{width: '90%'}}/>
            <div className='cardbox'>
              <OrderItems cartItems={cartItems}/>            
            </div>
          </div>
        )}
        {cartItems.length < 1 && (
          <div><h2>There are no products to Show</h2></div>
        )}
        
    </div>
    </>
  )
}
