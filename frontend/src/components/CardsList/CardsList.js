import React from "react";
import Card from "./Card/Card";
import "./CardsList.css";

const CardsList = (props) => {
    const { movies } = props;
    console.log("CardsList", props);

    const renderMovies = () => {
        return movies.map((movie, index) => {
            return <Card key={index} movie={movie}></Card>;
        });
    };

    return <div className="list">{renderMovies()}</div>;
};

export default CardsList;
