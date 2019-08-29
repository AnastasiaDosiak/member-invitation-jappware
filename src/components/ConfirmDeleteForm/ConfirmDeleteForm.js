import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Overlay from '../Overlay/Overlay';
import './ConfirmDeleteForm.scss'
export default class ConfirmDeleteForm extends PureComponent {
    render() {
        const { show, onClick } = this.props;
        return show ? (
            <>
                <form className="confirm-delete__form">
                    <p className="confirm-delete__question">
                        Are you sure to delete this user?
                        </p>
                    <div className="confirm-delete__buttons">
                        <button className="confirm-delete__answer-button" onClick={onClick}>
                            yes
                    </button>
                        <button className="confirm-delete__answer-button" onClick={onClick}>
                            no
                    </button>
                    </div>
                </form>
                <Overlay show={true} />
            </ >
        ) : null
    }
}

