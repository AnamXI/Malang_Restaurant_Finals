import React from 'react';
import { Link, useNavigate } from "react-router-dom"
import {auth} from './config/Config'


export const Navbar = ({user}) => {
    const Navigate = useNavigate();
    const Logout = () => {
        auth.signOut().then(useNavigate('/login'))
    }

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
            <li>  <Link to="/signup">Register</Link>  </li>
            <li>  <Link to="/login">Log In</Link>  </li>
        </ul>}

        {user &&
        <ul>
            <li style={{marginLeft: "100px"}}><Link to="/">Home</Link></li>
            <li>  <Link to="/menus">Menus</Link>  </li>
            <li>  <Link to="/orders">Orders</Link>  </li>
            <li>  <Link to="/account">{user}</Link>  </li>
            <li>  <Link to="" onClick={Logout}>Logout</Link>  </li>
          
         
        </ul>}
        </nav>

    </section>
}

// [ THIS IS A FUNCTION FOR ACTIVE NAVBAR COLORS BUT WONT WORK IF IT AINT A FUNCTION ]

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