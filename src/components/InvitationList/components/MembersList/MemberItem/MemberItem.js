import React, { memo } from "react";
import UserItem from "../../../../UserItem/UserItem";
import "./MemberItem.scss";

export default memo(function MemberItem({ firstName, lastName }) {
  return (
    <div className="member-item">
      <UserItem firstName={firstName} lastName={lastName} />
      <input className="member-item__checkbox" type="checkbox" />
      <button className="member-item__delete-button">
        <i className="fa fa-times-circle"/>
      </button>
    </div>
  );
});
