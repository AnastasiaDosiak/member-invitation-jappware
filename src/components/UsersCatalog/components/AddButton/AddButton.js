import React, { memo } from 'react'
import './AddButton.scss'
export default memo(function AddButton({onClick}) {
    return (
        <button className="user-add-button" onClick={onClick}>
Add new member
        </button>
    )
})