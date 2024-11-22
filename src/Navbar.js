import { Link, useMatch, useResolvedPath } from "react-router-dom"

export const Navbar = ({user}) => {
    
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
        {!user &&
        <ul>
            <li style={{marginLeft: "100px"}}><Link to="/">Home</Link></li>
            <li>  <Link to="/menus">Menus</Link>  </li>
            <li>  <Link to="/account">Account</Link>  </li>
            <li>  <Link to="/orders">Orders</Link>  </li>
            <li>  <Link to="/signup">SO</Link>  </li>
            <li>  <Link to="/login">LO</Link>  </li>
            <li>  <Link to="/account">{user}</Link>  </li>
        </ul>}

        {user &&
        <ul>
            <li style={{marginLeft: "100px"}}><Link to="/">Home</Link></li>
            <li>  <Link to="/menus">Menus</Link>  </li>
            <li>  <Link to="/account">Account</Link>  </li>
            <li>  <Link to="/orders">Orders</Link>  </li>
            <li>  <Link to="/account">{user}</Link>  </li>
         
        </ul>}
        </nav>

    </section>
}

// function CustomLink({to, children, ...props}) {
//     const resolvedPath = useResolvedPath(to)
//     const isActive = useMatch({path: resolvedPath.pathname, end: true})
//     return (
//         <li className={isActive ? "active" : ""}>
//             <Link to={to} {...props}>
//             {children}
//             </Link>
//         </li>
//     )
// }