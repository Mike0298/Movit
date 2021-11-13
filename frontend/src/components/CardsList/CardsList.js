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
    }, [isLoading]);

    const renderMovies = () => {
        return movies.map((movie, index) => {
            return <Card key={index} movie={movie}></Card>;
        });
    };

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "28px",
                }}
            >
                <DropdownOptions />
                <SearchBar />
            </div>
            {isLoading && (
                <HashLoader css={override} size={150} color={"#7959ec"} />
            )}
            {!isLoading && <div className="list">{renderMovies()}</div>}
        </>
    );
};

export default CardsList;
