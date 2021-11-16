import React from "react";
import { useDispatch } from "react-redux";
import "./movieRow.css";
import { Link } from "react-router-dom";
import { DeleteMovie } from "../../../../redux/actions/movieAction";

const MovieRow = ({ movie }) => {
  const dispatch = useDispatch();

  return (
    <tbody>
      <tr>
        <td>{movie._id}</td>
        <td>
          <Link to={"/movies/" + movie._id}>{movie.title}</Link>
        </td>
        <td>{movie.releaseYear}</td>
        <td>{movie.comments.length}</td>
        <td
          className="function"
          onClick={() => dispatch(DeleteMovie(movie._id))}
        >
          Delete
        </td>
      </tr>
    </tbody>
  );
};

export default MovieRow;
