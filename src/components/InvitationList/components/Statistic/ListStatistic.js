import React, { memo } from 'react'
import './ListStatistic.scss'
export default memo(function ListStatistic() {
    return (
        <div>
            <p className="list-statistic">
                <span className="list-statistic__active-users">
                    active: &nbsp;
                </span>
                <span className="list-statistic__invited-users">
                    invited:
            </span>
            </p>
        </div>
    )
})
