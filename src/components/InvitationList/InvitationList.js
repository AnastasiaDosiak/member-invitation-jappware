import React, { PureComponent } from "react";
import MembersList from "./components/MembersList/MembersList";
import ListStatistic from "./components/Statistic/ListStatistic";
import ListCard from "../ListCard/ListCard";
import "../ListCard/ListCard.scss";
import Button from "../ListCard/components/Button/Button";
import ConfirmDeleteForm from "../ConfirmDeleteForm/ConfirmDeleteForm";
export default class InvitationList extends PureComponent {
  render() 
  {
    return (
      <ListCard title="Invited users">
        <ListStatistic />
        <MembersList onDeleteMember={this.props.onDeleteInvitation} users={this.props.users} />
        <Button
          onClick={this.props.onClear}
          useDangerousMode={true}
          text="Clear invitations"
          icon={<i className="fa fa-trash-alt"/>}
        />
        <ConfirmDeleteForm show={false} />
      </ListCard>
    );
  }
}
