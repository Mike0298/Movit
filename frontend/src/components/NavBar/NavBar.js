import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import {
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import "./NavBar.css";

const Navbar = (props) => {
    console.log("Navbar", props);
    const { authenticated } = props;
    const [isSignedIn, setIsSignedIn] = useState(authenticated);

    useEffect(() => {
        setIsSignedIn(authenticated);
    }, [isSignedIn]);

    const renderNotSignedIn = () => {
        return (
            <NavLink to="/sign-up" className="link get-started-btn">
                Get Started
            </NavLink>
        );
    };

    const renderSignedIn = () => {
        return (
            <div className="navbar-user-container">
                <img
                    className="navbar-user-image"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt=""
                />
                <MdOutlineKeyboardArrowDown
                    className="navbar-user-options"
                    size={25}
                ></MdOutlineKeyboardArrowDown>
            </div>
        );
    };

    return (
        <>
            <div className="nav-wrapper sticky">
                <header className="navbar">
                    <Link to="/" className="link logo navbar-item">
                        <span>
                            <strong>MOVIT</strong>
                        </span>
                    </Link>
                    {/* <SearchBar/> */}
                    <div className="navbar-item">
                        {isSignedIn && renderSignedIn()}
                        {!isSignedIn && renderNotSignedIn()}
                    </div>
                </header>
            </div>
        </>
    );
};

export default Navbar;
