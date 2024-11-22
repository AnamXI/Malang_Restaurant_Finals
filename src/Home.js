import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navbar';

export const Home = ({user}) => {
  return (
    <div className="App">
      <header className="App-header">

        <Navbar user={user} />
    
        {/*PANEL 1*/}
        <section className="container">
        <img src="assets/homebg.png" alt='Main Branch' style={{width: "100%"}}/>
        </section>

        {/*PANEL 2*/}
        <section className="container" style={{backgroundImage: `url("assets/goldbg.png")`, backgroundSize: "cover", color: "black", padding: "200px 0px 200px 0px"}} >
            <h1 style={{fontSize: "calc(20px + 4vw)"}}>NAMASKAR!!</h1>
            <h1>नमस्कार</h1>
            <div style={{width: "80vw", margin: "40px auto 0px auto"}}>
            <h4>Welcome to Matsala. The place where Filipino Culture meets Indian Cuisine Inspired by the rich, aromatic spices of India and the bold, soulful flavors of the Philippines, we’ve created a menu that’s as unique as it is delicious.  We invite you to explore the unexpected, savor the familiar, and experience a fusion that’s truly one-of-a-kind.
            </h4>          
          </div>          
        </section>

        {/*PANEL 3*/}
        <section className="container" style={{backgroundImage: `url("assets/mainbr.png")`, backgroundSize: "cover", color: "white", padding: "300px 20px 300px 20px"}} >
            <h4 style={{fontSize: "calc(20px + 2vw)", letterSpacing: "10px"}}>Ready for a Culinary Adventure?</h4>
            <div style={{width: "80vw", marginLeft: "auto", marginRight: "auto"}}>
            
            <h2 style={{margin: "120px 0px 20px 0px"}}>Visit Us At</h2>
            <h4 style={{margin: "0px 0px 120px 0px"}}>94 Kamuning Road Brgy. Kamuning, Quezon City 1103 (Main)
            or at any of our other branches!!</h4>  

            <h2 style={{margin: "120px 0px 20px 0px"}}>Contact Us</h2>
            <h4 style={{margin: "0px 0px 10px 0px"}}>matsalataste@gmail.com</h4>
            <h4>+63 0915 7940 0997</h4>    

          </div>          
        </section>

      </header>
    </div>
  );
}


