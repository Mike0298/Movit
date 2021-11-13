import React from "react";
import "./Card.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link,
} from "react-router-dom";

const Card = (props) => {
    const { movie } = props;
    console.log("Card", props);
    return (
        <div className="card">
            <Link
                className="card-title"
                to={"/movies/" + movie._id}
                movie={movie}
            >
                <img className="card-image" src={movie.imageUrl} alt="" />
                {movie.title}
            </Link>
        </div>
    );
};

export default Card;
