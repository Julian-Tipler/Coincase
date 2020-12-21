import React from 'react';
import { closeModal } from '../../actions/modal_actions'
import { connect } from 'react-redux'
import SuccessfulTransaction from './successful_transaction'

function Modal({modal, coinInfo, closeModal}) {
    if (!modal) {
        return null
    }
    var component;
    switch(modal) {
        case 'successfulTransaction':
            component = <SuccessfulTransaction/>
            break;
        case 'unsuccessfulTransaction':
            return null //make component for unsuccessful
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e=> e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal,
        coinInfo: state.entities.coinInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);