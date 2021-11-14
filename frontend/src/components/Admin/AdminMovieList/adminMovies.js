import React from "react";
import "./adminMovies.css";
import MovieRow from "./movieRow.js/movieRow";

const AdminMovies = ({ movies }) => {
  return (
    <div className="movies-container">
      <div className="title">Movie List</div>
      <table className="movies-table">
        <tbody>
          <tr className="header">
            <th className="header-item">ID</th>
            <th className="header-item">Title</th>
            <th className="header-item">Release Year</th>
            <th className="header-item">Number of comments</th>
            <th className="actions header-item">Actions </th>
          </tr>
        </tbody>
        {movies.map((movie, index) => {
          return <MovieRow movie={movie} key={index} />;
        })}
      </table>
    </div>
  );
};

export default AdminMovies;
