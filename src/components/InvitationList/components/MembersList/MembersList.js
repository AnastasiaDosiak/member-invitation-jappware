import React, { PureComponent } from 'react';
import MemberItem from "./MemberItem/MemberItem";
import "./MembersList.scss";

export default class MembersList extends PureComponent {
  render() {
    const { users, onDeleteMember } = this.props;
    return (
      <>
        <ul className="members-list">
          {users.map(({ firstName, lastName, id }) => (
            <li key={id}>
              <MemberItem onDeleteItem={onDeleteMember} id={id} firstName={firstName} lastName={lastName} />
            </li>
          ))}
        </ul>
      </>
    )
  }
}
