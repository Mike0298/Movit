import React from "react";
import "./movieRow.css";
import { Link } from "react-router-dom";

const MovieRow = ({ movie }) => {
  return (
    <tbody>
      <tr>
        <td>{movie._id}</td>
        <td>
          <Link to={"/movies/" + movie._id}>{movie.title}</Link>
        </td>
        <td>{movie.releaseYear}</td>
        <td>{movie.comments.length}</td>
        <td>Delete</td>
      </tr>
    </tbody>
  );
};

export default MovieRow;
