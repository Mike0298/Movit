import React, { useEffect, useState } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Landing = () => {
    const authStatus = useSelector((state) => {
        return state.user.authenticated;
    });
    // console.log("auth", authStatus);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setIsAuthenticated(authStatus);
    }, [authStatus]);

    const handleToBrowseMovies = () => {
        window.scroll({ top: 880, behavior: "smooth" });
    };

    return (
        <div className="landing-container">
            <div>
                <h1 className="landing-title">ADVENTURE AWAITS</h1>
                <p
                    className="landing-small-title"
                    style={{
                        fontSize: "40px",
                        fontWeight: "700",
                    }}
                >
                    What are you waiting for?
                </p>
                {!isAuthenticated && (
                    <Link to="/sign-up">
                        <button className="landing-getStarted-btn landing-btn">
                            Get Started
                        </button>
                    </Link>
                )}
                <button
                    className="landing-toBrowse-btn landing-btn"
                    onClick={() => handleToBrowseMovies()}
                >
                    Browse Movies
                </button>
            </div>
        </div>
    );
};

export default Landing;
