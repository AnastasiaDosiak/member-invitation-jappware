import React, { memo } from 'react'
import ListItem from './ListItem/ListItem'
import './UserList.scss'
export default memo(function UserList() {
    return (
        <div className="user-list">
            <ListItem />
        </div>
    )
})
