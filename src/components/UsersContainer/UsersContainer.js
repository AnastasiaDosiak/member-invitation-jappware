import React, { PureComponent } from "react";
import UsersCatalog from "../UsersCatalog/UsersCatalog";
import InvitationList from "../InvitationList/InvitationList";
import "./UsersContainer.scss";
import mockUsers from "../UsersCatalog/utils/mockUsers.json";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
export default class UsersContainer extends PureComponent {
  state = { allUsers: mockUsers, invitedUsers: [] };
  handleAdd = (firstName, lastName, id) => {
    this.setState({
      allUsers: [{ firstName, lastName, id }, ...this.state.allUsers]
    });
  };
  handleSaveInvitation = (firstName, lastName, id) => {
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
    this.setState({
      invitedUsers: [
        ...this.state.invitedUsers.filter(({ id }) => id !== userId)
      ]
    })
  }
  handleUserStatusChange = (id, isActive) => {

    this.setState({
      invitedUsers:
        this.state.invitedUsers.map((user) => {
          if (user.id === id) {
            return { ...user, accepted: isActive }
          } else {
            return user
          }
        })

    })
  }
  onDragEnd = result => {
    const { draggableId, destination } = result;
    if (!destination) {
      return;
    }

    if (destination.droppableId === "invitationList") {
      const { firstName, lastName } = this.state.allUsers.find((user) => user.id === draggableId)
      this.handleSaveInvitation(firstName, lastName, draggableId)
    }
  }


  render() {
    return (
      <div className="content">
        <DragDropContext onDragEnd={this.onDragEnd}>

          <Droppable droppableId="userCatalog">
            {(provided, snapshot) => (
              <>
                <UsersCatalog
                  isDragingOver={snapshot.isDraggingOver}
                  innerRef={provided.innerRef}
                  onSave={this.handleSaveInvitation}
                  onAdd={this.handleAdd}
                  users={this.state.allUsers}
                />
                <div className="dnd-staff-placeholder">{provided.placeholder}</div>
              </>
            )}
          </Droppable>
          <Droppable droppableId="invitationList">
            {(provided, snapshot) => (
              <>
                <InvitationList
                  isDragingOver={snapshot.isDraggingOver}
                  innerRef={provided.innerRef}
                  invitedLength={this.state.invitedUsers.length}
                  onStatusChange={this.handleUserStatusChange}
                  onClear={this.handleClearInvitations}
                  users={this.state.invitedUsers}
                  onDeleteInvitation={this.handleDeleteInvitation}

                />
                <div className="dnd-staff-placeholder">{provided.placeholder}</div>
              </>
            )}

          </Droppable>


        </DragDropContext>
      </div >
    );
  }
}
