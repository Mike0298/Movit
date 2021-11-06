import React from "react";
import "./Card.css";

const Card = (props) => {
    const { movie } = props;
    return (
        <div className="card">
            <img className="card-image" src={movie.imageUrl} alt="" />
            <a className="card-title" href="#">
                {movie.title}
            </a>
        </div>
    );
};

export default Card;
