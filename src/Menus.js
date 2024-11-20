import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';


function Menus() {
  return (
    <div className="App">
      <header className="App-header">

        <Navbar />    

        {/*MAIN MENUS*/}
        <section className="container" style={{backgroundImage: `url("assets/menusbg.png")`, backgroundSize: "cover", color: "black", padding: "100px 0px 200px 0px"}} >
            <h1 style={{fontSize: "calc(20px + 4vw)"}}>Explore Our Various Flavors!</h1>

            <div className="cardbox">
                  <div className="card">
                    <button className="cardimg" style={{backgroundImage: `url("assets/mpinoy.png")`}}></button>
                    <h2>Pinoy</h2>
                    <h4>Hello</h4>
                  </div>
                  <div className="card">
                    <button className="cardimg" style={{backgroundImage: `url("assets/mindian.png")`}}></button>
                    <h2>Indian</h2>
                    <h4>Hello</h4>
                  </div>
                  <div className="card">
                    <button className="cardimg" style={{backgroundImage: `url("assets/msweets.png")`}}></button>
                    <h2>Sweets</h2>
                    <h4>Hello</h4>
                  </div>
                  <div className="card">
                    <button className="cardimg" style={{backgroundImage: `url("assets/mdrinks.png")`}}></button>
                    <h2>Drinks</h2>
                    <h4>Hello</h4>
                  </div>
            </div>          
        </section>

      </header>
    </div>
  );
}

export default Menus;
