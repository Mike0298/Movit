import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
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
                <Link to="/sign-up">
                    <button className="landing-getStarted-btn landing-btn">
                        Get Started
                    </button>
                </Link>
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
