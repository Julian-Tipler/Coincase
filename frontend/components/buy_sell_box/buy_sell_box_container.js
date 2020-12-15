import { connect } from 'react-redux';
import {createTransaction} from '../../actions/transaction_actions'
import { fetchCoinInfo } from '../../actions/gecko_api_actions';
import BuySellBox from './buy_sell_box';
import { clearErrors } from '../../actions/transaction_actions';

const msp = (state,ownProps) => {
    return({
        currentUser: state.session.id,
        id: ownProps.id,
        coinInfo: state.entities.coinInfo,
        transactionResponse: Object.values(state.entities.transactions),
        errors: state.errors
    })
}

const mdp = dispatch => ({
    createTransaction: (transaction) => dispatch(createTransaction(transaction)),
    fetchCoinInfo: (id) => dispatch(fetchCoinInfo(id)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(msp,mdp)(BuySellBox)