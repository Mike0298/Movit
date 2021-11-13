import React from "react";
import "./adminNav.css";
import { useDispatch } from "react-redux";
import { changeView } from "../../../redux/actions/adminAction";

const AdminNav = () => {
  const dispatch = useDispatch();

  return (
    <nav className="admin-nav">
      <div className="admin-nav-item" onClick={() => dispatch(changeView(0))}>
        Overview
      </div>
      <div className="admin-nav-item" onClick={() => dispatch(changeView(1))}>
        Movies
      </div>
      <div className="admin-nav-item" onClick={() => dispatch(changeView(2))}>
        Users
      </div>
    </nav>
  );
};

export default AdminNav;
