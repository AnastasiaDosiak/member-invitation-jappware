import React, { memo } from 'react'
import './ListCard.scss'
export default memo(function ListCard({ children, title }) {
    return (
        <div className="list-card">
            <h1 className="list-card__heading">
                {title}
            </h1>
                {children}
        </div>
    )
})
