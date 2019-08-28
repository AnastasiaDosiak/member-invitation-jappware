import React, { memo } from 'react'

import UserList from './components/UsersList/UserList'
import './UsersCatalog.scss'
import ListCard from '../ListCard/ListCard';
import '../ListCard/ListCard.scss'
import Button from '../ListCard/components/Button/Button'
import AddUserForm from '../AddUserForm/AddUserForm';
export default memo(function UsersCatalog() {
    return (
        <ListCard title="User's catalog">
            <UserList />
            <Button text="Add a new member" />
            <AddUserForm show={true}/>
        </ListCard>
    )
})

