import React from "react";
import "./adminOverview.css";

const AdminOverview = ({ movies }) => {
  return (
    <div className="admin-overview">
      <div className="title">Admin Overview</div>
      <div className="content">
        <div className="admin-overview-item">
          <div className="item-title">Number of Movies</div>
          <div className="item-detail">{movies.length}</div>
        </div>
        <div className="admin-overview-item">
          <div className="item-title">Number of Users</div>
          <div className="item-detail">10</div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
