import React, { memo } from "react";
import ListItem from "./ListItem/ListItem";
import "./UserList.scss";
import { Draggable } from 'react-beautiful-dnd';
export default memo(function UserList({ users, onSave }) {
  return (
    <ul className="user-list">
      {users.map(({ firstName, lastName, id }, index) => (
        <Draggable
          key={id}
          draggableId={id}
          index={index}>
          {(provided, snapshot) => (
            <li
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={{
                ...provided.draggableProps.style
              }} >
              <ListItem
                id={id}
                onSave={onSave}
                firstName={firstName}
                lastName={lastName}
              />
        
            </li>
          )}
        </Draggable>
      ))}
    </ul>
  );
});
