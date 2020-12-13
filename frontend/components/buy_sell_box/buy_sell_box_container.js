import { connect } from 'react-redux';
import {createTransaction} from '../../actions/transaction_actions'
import BuySellBox from './buy_sell_box';

const msp = (state) => ({
    targetCoin: state.entities.targetCoin
})

const mdp = dispatch => ({
    createTransaction: (transaction) => dispatch(createTransaction)
})

export default connect(msp,mdp)(BuySellBox)