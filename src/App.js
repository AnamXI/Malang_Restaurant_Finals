import './App.css';
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import Menus from './Menus';
import Account from './Account';
import Reservations from './Reservations';
import Orders from './Orders';
import { AddProducts } from './components/AddProducts';


function App() {
  console.log(window.location)
  return ( <div className="App-header">

    <div className="container">


      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/menus" element={<Menus />}/>
        <Route path="/account" element={<Account />}/>
        <Route path="/reservations" element={<Reservations />}/>
        <Route path="/orders" element={<Orders />}/>
        <Route path="/ap" element={<AddProducts />}/>
      </Routes>


    </div>
    </div>
  );
}

export default App;
