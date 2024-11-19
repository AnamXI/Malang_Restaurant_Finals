import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <div id="pdiv" style={{backgroundImage: `url("assets/homebg2.png")`, backgroundSize: "cover"}} >
        <div style={{height: "1080px"}}></div>
        </div> */}

        {/*PANEL 1*/}
        <div class="container">
        <img src="assets/homebg.png" style={{width: "100%"}}/>
        </div>

        {/*PANEL 2*/}
        <div class="container">
          <img src="assets/goldbg.png" style={{width: "100%"}}></img>
          <div style={{position: "absolute", left: "45%", top: "45%", color: "black"}} ><h1>HIA</h1></div>
        </div>



        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        
      </header>
    </div>
  );
}

export default App;
