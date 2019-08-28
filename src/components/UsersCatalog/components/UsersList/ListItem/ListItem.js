import React, { memo } from 'react'
import UserItem from '../../../../UserItem/UserItem'
import './ListItem.scss'
export default memo(function ListItem({firstName,lastName}) {
    return (
        <div className="list-item"> 
            <UserItem firstName={firstName} lastName={lastName}/>
            <button className="save-button">
                save
            </button>
        </div>
    )
})

