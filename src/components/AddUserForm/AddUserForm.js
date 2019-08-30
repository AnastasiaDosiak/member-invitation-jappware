import React, { PureComponent } from "react";
import "./AddUserForm.scss";
import Overlay from "../Overlay/Overlay";
import uuidv1 from "uuid/v1";
export default class AddUserForm extends PureComponent {
  state = { firstName: "", lastName: "" };
  handleFirstNameChange = event => {
    this.setState({ firstName: event.target.value });
  };
  handleLastNameChange = event => {
    this.setState({ lastName: event.target.value });
  };
  handleAdd = event => {
    event.preventDefault();
    const newId = uuidv1();
    this.props.onAdd(this.state.firstName, this.state.lastName, newId);
    this.props.onClose();
  };
  render() {
    const { onClose, useCloseButton } = this.props;
    return (
      <>
        <form className="add-user__form" onSubmit={this.handleAdd}>
          {useCloseButton ? (
            <button className="add-user__close-button" onClick={onClose}>
              {" "}
              <i className="fa fa-times-circle"/>{" "}
            </button>
          ) : null}
          <div className="add-user__content">
            <input
              onChange={this.handleFirstNameChange}
              value={this.state.firstName}
              className="add-user__input"
              placeholder="write first name"
            />
            <input
              onChange={this.handleLastNameChange}
              value={this.state.lastName}
              className="add-user__input"
              placeholder="write last name"
            />
            <input type="submit" className="add-user__add-button" value="add" />
          </div>
        </form>
        <Overlay show={true} />
      </>
    );
  }
}
