import React from "react";
import "./userRow.css";
import { useDispatch } from "react-redux";
import { modUser, unModUser } from "../../../../redux/actions/adminAction";

const UserRow = ({ user }) => {
  const dispatch = useDispatch();

  const render = () => {
    switch (user.user.accountType) {
      case "admin":
        return <td>Unable to modify</td>;
      case "moderator":
        return (
          <td
            className="function"
            onClick={() => dispatch(unModUser(user._id, user.user._id))}
          >
            Unmod
          </td>
        );
      case "member":
        return (
          <td
            className="function"
            onClick={() => dispatch(modUser(user._id, user.user._id))}
          >
            Mod
          </td>
        );
      default:
        return;
    }
  };

  return (
    <tbody>
      <tr>
        <td>{user.user._id}</td>
        <td>{user.user.name}</td>
        <td>{user.user.accountType}</td>
        <td>{user._id}</td>
        {render()}
      </tr>
    </tbody>
  );
};

export default UserRow;
