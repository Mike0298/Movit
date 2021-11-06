import React, { useEffect } from "react";
import { render } from "react-dom";
import Card from "./Card/Card";
import "./CardsList.css";
const CardsList = (props) => {
    const { movies } = props;
    console.log("CardsList", movies);

    return (
        <>
            <div className="list">
                {movies.map((movie, index) => {
                    return <Card key={index} movie={movie}></Card>;
                })}
            </div>
        </>
    );
};

export default CardsList;
