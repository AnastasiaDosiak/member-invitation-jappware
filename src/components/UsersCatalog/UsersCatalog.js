import React, { memo } from 'react'
import AddButton from './components/AddButton/AddButton'
import UserList from './components/UsersList/UserList'
import './UsersCatalog.scss'
export default memo(function UsersCatalog() {
    return (
        <div className="catalog-content">
            <h1 className="main-heading">
                Catalog
                </h1>
            <UserList />
            <AddButton />
        </div>
    )
})

