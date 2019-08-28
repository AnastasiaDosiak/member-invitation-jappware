import React, { PureComponent } from 'react'
import './AddUserForm.scss'
export default class AddUserForm extends PureComponent {
    state = { firstName: "", lastName: "" }
    render() {
        const { show, onAdd, onClose } = this.props;
        return show ? (
            <>
                <form className="add-user__form">
                    <button className="add-user__close-button">
                    <i class="fa fa-times-circle"></i>
                        </button>
                    <input value={this.state.firstName} className="add-user__input" placeholder="write first name" />
                    <input value={this.state.lastName} className="add-user__input" placeholder="write last name" />
                    <button className="add-user__add-button">
                        add
                </button>
                </form>
                <div className="overlay">
                </div>
            </>
        ) : null
    }
}
