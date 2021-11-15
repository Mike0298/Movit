import React from "react";
import "./userRow.css";

const UserRow = ({ user }) => {
  return (
    <tbody>
      <tr>
        <td>{user.user._id}</td>
        <td>{user.user.name}</td>
        <td>{user.user.accountType}</td>
        <td>{user._id}</td>
        <td>MODify</td>
      </tr>
    </tbody>
  );
};

export default UserRow;
