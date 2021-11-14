import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Admin.css";

import { fetchUser } from "../../redux/actions/adminAction";

import AdminNav from "../../components/Admin/AdminNavbar/adminNav";
import AdminOverview from "../../components/Admin/AdminOverview/adminOverview";
import AdminMovies from "../../components/Admin/AdminMovieList/adminMovies";
import AdminUsers from "../../components/Admin/AdminUserList/adminUsers";

const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const movies = useSelector((state) => {
    return state.movie.movies;
  });

  const admin = useSelector((state) => {
    return state.adminUI;
  });

  const renderView = (view) => {
    switch (view) {
      case 0:
        return <AdminOverview movies={movies} users={admin.users} />;
      case 1:
        return <AdminMovies movies={movies} />;
      case 2:
        return <AdminUsers />;
      default:
        return <AdminOverview movies={movies} />;
    }
  };

  const render = admin.loading ? (
    <div>Loading</div>
  ) : (
    renderView(admin.currentView)
  );

  return (
    <div className="admin-container">
      <div className="left">
        <AdminNav />
      </div>
      <div className="right">{render}</div>
    </div>
  );
};

export default Admin;
