import React from "react";
import { actRandomMovie } from "../../redux/actions/movieAction";
import { useDispatch } from "react-redux";

const RandomButton = () => {
    const dispatch = useDispatch();
    return (
        <button
            onClick={() => dispatch(actRandomMovie())}
            style={{ color: "black" }}
        >
            Random a movie
        </button>
    );
};

export default RandomButton;
