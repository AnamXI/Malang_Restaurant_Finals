import React from 'react'
import { IndividualCartItem } from './components/IndividualCartItem'

export const OrderItems = ({cartItems}) => {
  return cartItems.map((cartItem)=>(
    <IndividualCartItem key={cartItem.ID} cartItem={cartItem}/>
  ))
}


