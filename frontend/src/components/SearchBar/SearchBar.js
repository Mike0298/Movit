import React from "react";
import "./SearchBar.css";
import { useSelector, useDispatch } from "react-redux";
const SearchBar = () => {
    const movies = useSelector((state) => {
        console.log("search", state);
        return state.movie.movies;
    });

    const handleSearchInput = (value) => {
        console.log(value);
        console.log(
            movies.filter((movie) =>
                movie.title.toLowerCase().includes(value.toLowerCase())
            )
        );

        return movies.filter((movie) =>
            movie.title.toLowerCase().includes(value.toLowerCase())
        );
    };

    return (
        <input
            type="text"
            placeholder="🔎 Find something..."
            className="searchbar"
            onChange={(e) => handleSearchInput(e.target.value)}
        />
    );
};

export default SearchBar;
