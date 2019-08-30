import React, { memo } from "react";
import MemberItem from "./MemberItem/MemberItem";
import "./MembersList.scss";
import ConfirmDeleteForm from "../../../ConfirmDeleteForm/ConfirmDeleteForm";
export default memo(function MembersList({ users }) {
  return (
    <ul className="members-list">
      {users.map(({ firstName, lastName, id }) => (
        <li key={id}>
          <MemberItem firstName={firstName} lastName={lastName} />
        </li>
      ))}
      <ConfirmDeleteForm show={false} />
    </ul>
  );
});
