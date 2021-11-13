import React from "react";
import CardsList from "../../components/CardsList/CardsList";
import "./Home.css";
import RandomButton from "../../components/RandomButton/RandomButton";
import Landing from "../../components/Landing/Landing";

const Home = (props) => {
    console.log("Home", props);

    return (
        <div className="home">
            {/* <RandomButton></RandomButton> */}
            {/* <Landing></Landing> */}
            <CardsList {...props}></CardsList>
        </div>
    );
};

export default Home;
