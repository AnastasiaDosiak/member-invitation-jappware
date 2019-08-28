import React, { memo } from 'react'
import MembersList from './components/MembersList/MembersList'
import ClearButton from './components/ClearButton/ClearButton'
import ListStatistic from './components/Statistic/ListStatistic'
export default memo(function InvitationList() {
    return (
        <div className="list">
            <h1 className="main-heading">
                List
                </h1>
            <MembersList />
            <ClearButton />
            <ListStatistic />
        </div>
    )
})
