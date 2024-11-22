import React, { Component } from 'react';
import './App.css';
import { Home } from './Home';
import { Routes, Route } from "react-router-dom";
import { Menus } from './Menus';
import { Account } from './Account';
import { Orders } from './Orders';
import { AddProducts } from './components/AddProducts';
import { Signup }  from './components/Signup';
import { Login }  from './components/Login';
import {auth, db} from './config/Config';


export class App extends Component {

  state={
    user: null
  }

  componentDidMount(){
    auth.onAuthStateChanged(user=>{
      if(user){
        db.collection('RegisteredUsers').doc(user.uid).get().then(snapshot=>{
          this.setState({
            user: snapshot.data().Name
          })
        })
      }
      else{
        this.setState({
          user: null
        })
      }
    })
  }

render(){
  return ( 
  <div className="App-header">
    <div className="container">


      <Routes>
        {/* <Route exact path="/" element={<Home />}/> */}
        <Route exact path="/" element={<Home user={this.state.user} />}/>
        <Route path="/menus" element={<Menus user={this.state.user}/>}/>
        <Route path="/account" element={<Account user={this.state.user}/>}/>
        <Route path="/orders" element={<Orders users={this.state.user}/>}/>
        <Route path="/signup" element={<Signup user={this.state.user}/>}/>
        <Route path="/login" element={<Login user={this.state.user}/>}/>
        <Route path="/ap" element={<AddProducts user={this.state.user}/>}/>
      </Routes>


    </div>
    </div>
  );
}
}

export default App;

//THINGS TO NOTE
// component prop is now element prop
// prop.history.push() should be useNavigate(), same for useHistory()
// For some reason make sure every proper page is "export const Name = () => {}"

//ERRORS HISTORY 
// 1) Pages were export default function Name()
//
//
//
//
//
