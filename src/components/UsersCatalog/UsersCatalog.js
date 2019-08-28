import React, { memo } from 'react'
import AddButton from './components/AddButton/AddButton'
import UserList from './components/UsersList/UserList'
import './UsersCatalog.scss'
import ListCard from '../List/ListCard';
export default memo(function UsersCatalog() {
    return (
        <ListCard>
            <h1 className="main-heading">
                Catalog
                </h1>
            <UserList />
            <AddButton />
        </ListCard>
    )
})

