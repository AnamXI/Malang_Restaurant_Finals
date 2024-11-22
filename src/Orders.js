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

  const user = GetCurrentUser();
  const [cartItems, setCartItems] = useState([]);
  const Navigate = useNavigate();

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

  console.log({cartItems});

  return (
    <>
    <div className='App-header'>
        <Navbar user={users}/>
        <br/><hr/>           
        {cartItems.length > 0 && (
          <div>
            <h1>Cart</h1>
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
