import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link,
} from "react-router-dom";
import Home from "../../pages/Home/Home";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import "./NavBar.css";
const Navbar = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <Router>
            <div className="wrapper sticky">
                <header className="navbar">
                    <Link to="/" className="link logo navbar-item">
                        <span>
                            <strong>MOVIT</strong>
                        </span>
                    </Link>
                    {/* <SearchBar/> */}
                    <ul className="navbar-item">
                        <li>
                            <NavLink to="/sign-in" className="link">
                                Sign in
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/sign-up" className="link">
                                Sign up
                            </NavLink>
                        </li>
                    </ul>
                </header>
            </div>

            <Switch>
                <Route path="/sign-in">
                    <SignIn />
                </Route>
                <Route path="/sign-up">
                    <SignUp />
                </Route>
                <Route>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

export default Navbar;
