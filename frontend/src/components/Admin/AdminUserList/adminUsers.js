import React from "react";
import UserRow from "./UserRow/userRow";
import "./adminUsers.css";

const AdminUsers = ({ users }) => {
  return (
    <div className="movies-container">
      <div className="title">Movie List</div>
      <table className="movies-table">
        <tbody>
          <tr className="header">
            <th className="header-item">Account ID</th>
            <th className="header-item">Name</th>
            <th className="header-item">Account Type</th>
            <th className="header-item">Profile ID</th>
            <th className="actions header-item">Actions </th>
          </tr>
        </tbody>
        {users.map((user, index) => {
          return <UserRow user={user} key={index} />;
        })}
      </table>
    </div>
  );
};

export default AdminUsers;
