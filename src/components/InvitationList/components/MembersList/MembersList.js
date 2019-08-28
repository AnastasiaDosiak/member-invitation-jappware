import React, { memo } from 'react'
import MemberItem from './MemberItem/MemberItem'
import './MembersList.scss'
export default memo(function MembersList() {
    return (
        <div className="members-list">
            <MemberItem />
        </div>
    )
})
