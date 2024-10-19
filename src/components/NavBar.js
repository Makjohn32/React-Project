import React from "react";
import { Link } from 'react-router-dom';
//import './NavBar.css';


function Navbar(){
    return(
        <nav className="navbar">
            <div>
                <Link to="/">React App</Link> 
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Events</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;