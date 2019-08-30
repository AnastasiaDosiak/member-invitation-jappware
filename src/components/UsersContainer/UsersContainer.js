import React, { PureComponent } from "react";
import UsersCatalog from "../UsersCatalog/UsersCatalog";
import InvitationList from "../InvitationList/InvitationList";
import "./UsersContainer.scss";
import mockUsers from "../UsersCatalog/utils/mockUsers.json";

export default class UsersContainer extends PureComponent {
  state = { allUsers: mockUsers, invitedUsers: [] };
  handleAdd = (firstName, lastName, id) => {
    this.setState({
      allUsers: [...this.state.allUsers, { firstName, lastName, id }]
    });
  };
  handleSaveInvitations = (firstName, lastName, id) => {
    !this.state.invitedUsers.find(user => user.id === id) &&
      this.setState({
        invitedUsers: [
          ...this.state.invitedUsers,
          { firstName, lastName, id, invited: true, accepted: false }
        ]
      });
  };
  handleClearInvitations = () => {
    this.setState({
      invitedUsers: []
    });
  };
  handleDeleteInvitation = (userId) => {
    this.setState({invitedUsers:[
      ...this.state.invitedUsers.filter(({id})=> id !== userId)
    ]})
  }
  render() {
    return (
      <div className="content">
        <UsersCatalog
          onSave={this.handleSaveInvitations}
          onAdd={this.handleAdd}
          users={this.state.allUsers}
        />
        <InvitationList
          onClear={this.handleClearInvitations}
          users={this.state.invitedUsers}
          onDeleteInvitation = {this.handleDeleteInvitation}
        />
      </div>
    );
  }
}
