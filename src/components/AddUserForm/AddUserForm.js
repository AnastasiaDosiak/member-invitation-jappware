import React, { PureComponent } from 'react'
import './AddUserForm.scss'
import Overlay from '../Overlay/Overlay';
export default class AddUserForm extends PureComponent {
    state = { firstName: "", lastName: "" }
    handleFirstNameChange = (event) => {
        this.setState({ firstName: event.target.value })
    }
    handleLastNameChange = (event) => {
        this.setState({ lastName: event.target.value })
    }
        handleAdd = () => {this.props.onAdd(this.state.firstName, this.state.lastName)}
    render() {
        const { show, onClose, useCloseButton } = this.props;
        return show ? (
            <>
                <form className="add-user__form">
                    {useCloseButton ? <button className="add-user__close-button" onClick={onClose}  > <i class="fa fa-times-circle"></i>   </button> : null}
                    <div className="add-user__content">
                        <input onChange={this.handleFirstNameChange} value={this.state.firstName} className="add-user__input" placeholder="write first name" />
                        <input onChange={this.handleLastNameChange} value={this.state.lastName} className="add-user__input" placeholder="write last name" />
                        <button onClick={this.handleAdd} className="add-user__add-button">
                            add
                </button>
                    </div>
                </form>
                <Overlay show={show} />
            </>
        ) : null
    }
}
