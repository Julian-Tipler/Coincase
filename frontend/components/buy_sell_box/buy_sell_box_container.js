import { connect } from 'react-redux';
import {createTransaction} from '../../actions/transaction_actions'
import { fetchCoin } from '../../actions/gecko_api_actions';
import BuySellBox from './buy_sell_box';

const msp = (state) => {
    console.log(state)
    return({
        targetCoin: state.entities.targetCoin,
        currentUser: state.session.id
    })
}

const mdp = dispatch => ({
    createTransaction: (transaction) => dispatch(createTransaction(transaction)),
    fetchCoin: (id) => dispatch(fetchCoin(id))

})

export default connect(msp,mdp)(BuySellBox)