import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import Menus from './Menus';

function App() {
  console.log(window.location)
  return ( <div className="App-header">

    <div className="container">

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/menus" element={<Menus />}/>
      </Routes>

    </div>
    </div>
  );
}

export default App;
