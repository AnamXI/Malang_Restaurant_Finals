export default function Navbar(){
    return <section  style={{position: "sticky", top: "0", zIndex: "100"}}>
        
        <nav className="nav" >

        {/* LOGO STAMP */}
        <a href="/">
            <div style={{
                position: "absolute", backgroundColor: "aquamarine", 
                backgroundImage: `url("assets/logostamp.png")`, 
                backgroundSize: "cover", 
                width: "8vw", height: "10vw", 
                top: "0px",borderRight: "0.6vw solid black", 
                borderBottom: "0.6vw solid black", 
                overflow: "visible", zIndex: "101"}}>
            </div>
        </a>

        {/* NAVIGATION BUTTONS */}
        <ul>
            <li style={{marginLeft: "100px"}}><a href="/home">Home</a></li>
            <li>  <a href="/home">Menus</a>  </li>
            <li>  <a href="/home">Account</a>  </li>
            <li>  <a href="/home">Reservations</a>  </li>
            <li>  <a href="/home">Orders</a>  </li>
        </ul>
        </nav>
        
    </section>
}