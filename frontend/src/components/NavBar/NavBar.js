import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { logoutUser } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";
import "./NavBar.css";

const Navbar = (props) => {
    const dispatch = useDispatch();
    console.log("navbar", props);
    const { authenticated, userDetails } = props;
    const [isSignedIn, setIsSignedIn] = useState(authenticated);

    useEffect(() => {
        setIsSignedIn(authenticated);
    }, [authenticated]);

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
                    src={userDetails.user.avatar}
                    alt=""
                />
                <AiOutlineLogout
                    className="navbar-user-options"
                    size={24}
                    onClick={() => dispatch(logoutUser())}
                ></AiOutlineLogout>
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
