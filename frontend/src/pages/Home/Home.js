import React from "react";
import CardsList from "../../components/CardsList/CardsList";
import "./Home.css";

const Home = (props) => {
    console.log("Home", props);

    return (
        <div className="home">
            <CardsList {...props}></CardsList>
        </div>
    );
};

export default Home;
