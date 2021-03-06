import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import "./CardsList.css";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import DropdownOptions from "../DropdownOptions/DropdownOptions";
import SearchBar from "../SearchBar/SearchBar";

const override = css`
    display: block;
    margin: 0 auto;
`;

const CardsList = (props) => {
    const { movies, loading } = props.movies;
    const [isLoading, setIsLoading] = useState(true);
    console.log("CardsList", props);

    useEffect(() => {
        setIsLoading(loading);
    }, [loading]);

    const renderMovies = () => {
        return movies
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((movie, index) => {
                return <Card key={index} movie={movie}></Card>;
            });
    };

    return (
        <div style={{ position: "sticky" }}>
            {isLoading && (
                <HashLoader css={override} size={150} color={"#7959ec"} />
            )}
            {!isLoading && <div className="list">{renderMovies()}</div>}
        </div>
    );
};

export default CardsList;
