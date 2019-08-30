import React, { memo } from "react";
import UserItem from "../../../../UserItem/UserItem";
import "./ListItem.scss";
export default memo(function ListItem({ firstName, lastName, id, onSave }) {
  const handleSave = () => {
    onSave(firstName, lastName, id);
  };
  return (
    <div className="list-item">
      <UserItem firstName={firstName} lastName={lastName} />
      <button onClick={handleSave} className="save-button">
        save
      </button>
    </div>
  );
});
