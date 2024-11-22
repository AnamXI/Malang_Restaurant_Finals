import React from 'react'
import { Navbar } from './Navbar'

export const Account = ({ user }) => {
  return (
    <div className='App-header' style={{backgroundImage: `url("assets/mainbr.png")`}}>
        <Navbar user={user}/>
        <br></br>
        <h1>ACCOUNT</h1>
    </div>
  )
}
