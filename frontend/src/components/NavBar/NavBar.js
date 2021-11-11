import React, { useState } from "react";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import "./NavBar.css";
const Navbar = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <>
            <div className="wrapper sticky">
                <header className="navbar">
                    <Link to="/" className="link logo navbar-item">
                        <span>
                            <strong>MOVIT</strong>
                        </span>
                    </Link>
                    {/* <SearchBar/> */}
                    <div className="navbar-item">
                        <ul>
                            <li>
                                <NavLink to="/sign-in" className="link">
                                    Sign in
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/sign-up"
                                    className="link get-started-btn"
                                >
                                    Sign up
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>
        </>
    );
};

export default Navbar;
