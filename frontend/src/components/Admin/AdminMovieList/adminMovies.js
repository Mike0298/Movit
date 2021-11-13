import React from "react";
import "./adminMovies.css";
import MovieRow from "./movieRow.js/movieRow";

const AdminMovies = ({ movies }) => {
  return (
    <div className="movies-container">
      <div className="title">Movie List</div>
      <div className="movies-table">
        <div className="header">
          <div className="header-item">ID</div>
          <div className="header-item">Title</div>
          <div className="header-item">Release Year</div>
          <div className="header-item">Number of comments</div>
          <div className="actions header-item">Actions </div>
        </div>
      </div>
      {movies.map((movie, index) => {
        return <MovieRow movie={movie} id={index} />;
      })}
    </div>
  );
};

export default AdminMovies;
