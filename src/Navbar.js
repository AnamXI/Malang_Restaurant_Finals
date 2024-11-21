import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar(){
    
    return <section  style={{position: "sticky", top: "0", zIndex: "100"}}>
        
        <nav className="nav">

        {/* LOGO STAMP */}
        <Link to="/ap">
            <div style={{
                position: "absolute", backgroundColor: "aquamarine", 
                backgroundImage: `url("assets/logostamp.png")`, 
                backgroundSize: "cover", 
                width: "8vw", height: "10vw", 
                top: "0px",borderRight: "0.6vw solid black", 
                borderBottom: "0.6vw solid black", 
                overflow: "visible", zIndex: "101"}}>
            </div>
        </Link>

        {/* NAVIGATION BUTTONS */}
        <ul>
            <li style={{marginLeft: "100px"}}><CustomLink to="/">Home</CustomLink></li>
            <li>  <CustomLink to="/menus">Menus</CustomLink>  </li>
            <li>  <CustomLink to="/account">Account</CustomLink>  </li>
            <li>  <CustomLink to="/reservations">Reservations</CustomLink>  </li>
            <li>  <CustomLink to="/orders">Orders</CustomLink>  </li>
        </ul>
        </nav>

    </section>
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
            {children}
            </Link>
        </li>
    )
}