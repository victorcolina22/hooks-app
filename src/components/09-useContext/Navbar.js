import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">useContext</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink exact="true" to="/" className="nav-item nav-link">
                            Home
                        </NavLink>
                        <NavLink exact="true" to="/about" className="nav-item nav-link">
                            About
                        </NavLink>
                        <NavLink exact="true" to="/login" className="nav-item nav-link">
                            Login
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}