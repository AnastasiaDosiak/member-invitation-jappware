import React, { memo } from 'react'
import ListItem from './ListItem/ListItem'
import './UserList.scss'
export default memo(function UserList() {
    return (
        <div className="user-list">
            <ListItem  firstName="Baekhyun" lastName="Longnamechinaboy"/>
            <ListItem  firstName="Luhan" lastName="Sehun"/>
        </div>
    )
})
