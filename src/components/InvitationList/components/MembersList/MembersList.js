import React, { memo } from 'react'
import MemberItem from './MemberItem/MemberItem'
import './MembersList.scss'
import ConfirmDeleteForm from '../../../ConfirmDeleteForm/ConfirmDeleteForm';
export default memo(function MembersList() {
    return (
        <div className="members-list">
            <MemberItem />
            <ConfirmDeleteForm show={false}/>
        </div>
    )
})
