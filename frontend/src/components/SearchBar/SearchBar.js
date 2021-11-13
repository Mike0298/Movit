import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
    return (
        <input
            type="text"
            placeholder="🔎 Find something..."
            className="searchbar"
        />
    );
};

export default SearchBar;
