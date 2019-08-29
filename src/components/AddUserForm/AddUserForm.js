import React, { PureComponent } from 'react'
import './AddUserForm.scss'
import Overlay from '../Overlay/Overlay';
export default class AddUserForm extends PureComponent {
    state = { firstName: "", lastName: "" }
    render() {
        const { show, onAdd, onClose, useCloseButton } = this.props;
        return show ? (
            <>
                <form className="add-user__form">
                    {useCloseButton ? <button useCloseButton={true} className="add-user__close-button" onClick={onClose}  > <i class="fa fa-times-circle"></i>   </button> : null}
                    <div className="add-user__content">
                        <input value={this.state.firstName} className="add-user__input" placeholder="write first name" />
                        <input value={this.state.lastName} className="add-user__input" placeholder="write last name" />
                        <button className="add-user__add-button">
                            add
                </button>
                    </div>
                </form>
                <Overlay show={show} />
            </>
        ) : null
    }
}
