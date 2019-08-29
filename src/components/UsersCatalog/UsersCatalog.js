import React, { PureComponent } from 'react'
import UserList from './components/UsersList/UserList'
import './UsersCatalog.scss'
import ListCard from '../ListCard/ListCard';
import '../ListCard/ListCard.scss'
import Button from '../ListCard/components/Button/Button'
import AddUserForm from '../AddUserForm/AddUserForm';
import uuidv1 from 'uuid/v1'
import mockUsers from './utils/mockUsers.json'

export default class UsersCatalog extends PureComponent {
state = {showAddUserForm: false, users: mockUsers }
handleShowAddUserForm = (event) => {this.setState({showAddUserForm:true})}
handleClose =(event) =>  {this.setState({showAddUserForm:false})}
handleAdd = (firstName, lastName) =>  {}
render() {
        return (
            <ListCard title="User's catalog">
                <UserList users={this.state.users} />
                <Button onClick={this.handleShowAddUserForm} text="Add a new member" />
                <AddUserForm onAdd={this.handleAdd} onClose={this.handleClose} useCloseButton={true} show={this.state.showAddUserForm} />
            </ListCard>
        )
    }
}
