import React, { memo } from "react";
import ListItem from "./ListItem/ListItem";
import "./UserList.scss";
export default memo(function UserList({ users, onSave }) {
  return (
    <ul className="user-list">
      {users.map(({ firstName, lastName, id }) => (
        <li key={id}>
          <ListItem
            id={id}
            onSave={onSave}
            firstName={firstName}
            lastName={lastName}
          />
        </li>
      ))}
    </ul>
  );
});
