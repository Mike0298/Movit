import React from "react";
import CardsList from "../../components/CardsList/CardsList";
import "./Home.css";
import RandomButton from "../../components/RandomButton/RandomButton";

const Home = (props) => {
    console.log("Home", props);

    return (
        <div className="home">
            <RandomButton></RandomButton>
            <CardsList {...props}></CardsList>
        </div>
    );
};

export default Home;
