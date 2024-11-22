import React from 'react'
import { Navbar } from './Navbar'

export const Account = ({ user }) => {
  return (
    <div className='App-header' style={{backgroundImage: `url("assets/mainbr.png")`}}>
        <Navbar user={user}/>
        <div style={{flex: '1', display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
        <div><img src='assets/AccountPlaceholder.jpg' style={{borderRadius:'200px', }}/></div><br/>
        <div style={{backgroundColor: '#ffde59', color: 'black', boxShadow:'10px 10px black', borderRadius:'20px'}}>
          <h1 style={{margin:'10px'}}>{user}</h1></div>
        </div>
    </div>
  )
}
