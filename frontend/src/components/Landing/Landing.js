import React from "react";
import "./Landing.css";

const Landing = () => {
    return (
        <div className="landing-container">
            <div
                style={{
                    height: "100%",
                    padding: "260px 50px 20px",
                    justifyContent: "center",
                }}
            >
                <h1
                    style={{
                        fontSize: "74px",
                        fontWeight: "700",
                        color: "#7975ec",
                    }}
                >
                    ADVENTURE AWAITS
                </h1>
                <p
                    style={{
                        fontSize: "40px",
                        fontWeight: "700",
                    }}
                >
                    What are you waiting for?
                </p>
                <button
                    style={{
                        padding: "10px 15px",
                        backgroundColor: "#7975ec",
                        borderRadius: "4px",
                        color: "#e9e9eb",
                        fontSize: "24px",
                        marginTop: "15px",
                    }}
                >
                    START NOW
                </button>
            </div>
        </div>
    );
};

export default Landing;
