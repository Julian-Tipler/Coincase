import { connect } from 'react-redux';
import {createTransaction} from '../../actions/transaction_actions'
import { fetchCoinInfo } from '../../actions/gecko_api_actions';
import BuySellBox from './buy_sell_box';

const msp = (state,ownProps) => {
    console.log(state)
    return({
        currentUser: state.session.id,
        id: ownProps.id,
        coinInfo: state.entities.coinInfo
    })
}

const mdp = dispatch => ({
    createTransaction: (transaction) => dispatch(createTransaction(transaction)),
    fetchCoinInfo: (id) => dispatch(fetchCoinInfo(id))
})

export default connect(msp,mdp)(BuySellBox)