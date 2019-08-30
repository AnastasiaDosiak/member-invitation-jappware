import React, { PureComponent } from 'react';
import Overlay from '../Overlay/Overlay';
import './ConfirmDeleteForm.scss'
export default class ConfirmDeleteForm extends PureComponent {
    render() {
        const {  onConfirm, onReject } = this.props;
        return  (
            <>
                <form className="confirm-delete__form">
                    <p className="confirm-delete__question">
                        Are you sure to delete this ?
                        </p>
                    <div className="confirm-delete__buttons">
                        <button className="confirm-delete__answer-button" onClick={onConfirm}>
                            yes
                    </button>
                        <button className="confirm-delete__answer-button" onClick={onReject}>
                            no
                    </button>
                    </div>
                </form>
                <Overlay show={true} />
            </ >
        ) 
    }
}

