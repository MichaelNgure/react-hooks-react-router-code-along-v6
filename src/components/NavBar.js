import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar(){
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/login" className="nav-link">Login</NavLink>
        </nav>
    )
}

export default NavBar