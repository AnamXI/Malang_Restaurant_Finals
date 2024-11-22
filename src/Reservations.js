import React from 'react'
import { Navbar } from './Navbar'

export const Reservations = ({ user }) => {
  return (
    <div className='App-header'>
        <Navbar user={user}/>
        <h1>RESERVATIONS</h1>
    </div>
  )
}
