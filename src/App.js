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
        <div class="container" style={{backgroundImage: `url("assets/goldbg.png")`, backgroundSize: "cover", color: "black", padding: "120px 0px 120px 0px"}} >
            <h1 style={{fontSize: "calc(20px + 4vw)"}}>NAMASKAR!!</h1>
            <h1>नमस्कार</h1>
            <div style={{width: "80vw", marginLeft: "auto", marginRight: "auto"}}>
            <h4>Welcome to Matsala. The place where Filipino Culture meets Indian Cuisine Inspired by the rich, aromatic spices of India and the bold, soulful flavors of the Philippines, we’ve created a menu that’s as unique as it is delicious.  We invite you to explore the unexpected, savor the familiar, and experience a fusion that’s truly one-of-a-kind.
            </h4>
          
          </div>
          
        </div>



        <p>
          BOTTOM BAR
        </p>

        
      </header>
    </div>
  );
}

export default App;
