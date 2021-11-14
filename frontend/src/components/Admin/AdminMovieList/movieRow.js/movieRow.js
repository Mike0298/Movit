import React from "react";
import "./movieRow.css";
import { Link } from "react-router-dom";

const MovieRow = ({ movie }) => {
  return (
    <tr>
      <td>{movie._id}</td>
      <td>{movie.title}</td>
      <td>{movie.releaseYear}</td>
      <td>{movie.comments.length}</td>
      <td>Action</td>
    </tr>
  );
};

export default MovieRow;
