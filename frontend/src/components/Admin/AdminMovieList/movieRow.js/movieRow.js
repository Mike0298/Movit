import React from "react";
import "./movieRow.css";
import { Link } from "react-router-dom";

const MovieRow = ({ movie, id }) => {
  return (
    <div className="row">
      <div className="row-item">{id}</div>
      <div className="row-item">{movie.title}</div>
      <div className="row-item">{movie.releaseYear}</div>
      <div className="row-item">{movie.comments.length}</div>
      <div className="row-item">Action</div>
    </div>
  );
};

export default MovieRow;
