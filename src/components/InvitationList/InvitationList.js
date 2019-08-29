import React, { memo } from 'react'
import MembersList from './components/MembersList/MembersList'
import ListStatistic from './components/Statistic/ListStatistic'
import ListCard from '../ListCard/ListCard';
import '../ListCard/ListCard.scss'
import Button from '../ListCard/components/Button/Button'
import ConfirmDeleteForm from '../ConfirmDeleteForm/ConfirmDeleteForm';
export default memo(function InvitationList() {
    return (
        <ListCard title="Invited users">
            <MembersList />
            <Button useDangerousMode={true} text="Clear invitations" icon={<i className="fa fa-trash-alt"></i>} />
            <ListStatistic />
            <ConfirmDeleteForm show={false}/>
        </ListCard>
    )
})
