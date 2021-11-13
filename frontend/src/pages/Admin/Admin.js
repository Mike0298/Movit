import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Admin.css";

import AdminNav from "../../components/Admin/AdminNavbar/adminNav";
import AdminOverview from "../../components/Admin/AdminOverview/adminOverview";
import AdminMovies from "../../components/Admin/AdminMovieList/adminMovies";
import AdminUsers from "../../components/Admin/AdminUserList/adminUsers";

const Admin = () => {
  const movies = useSelector((state) => {
    return state.movie.movies;
  });

  const currentView = useSelector((state) => {
    return state.admin.currentView;
  });

  console.log(currentView);

  const render = (view) => {
    switch (view) {
      case 0:
        return <AdminOverview movies={movies} />;
      case 1:
        return <AdminMovies movies={movies} />;
      case 2:
        return <AdminUsers />;
      default:
        return <AdminOverview movies={movies} />;
    }
  };

  return (
    <div className="admin-container">
      <div className="left">
        <AdminNav />
      </div>
      <div className="right">{render(currentView)}</div>
    </div>
  );
};

export default Admin;
