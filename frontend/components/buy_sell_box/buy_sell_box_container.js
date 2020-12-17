import { connect } from 'react-redux';
import {createTransaction} from '../../actions/transaction_actions'
import { fetchCoinInfo } from '../../actions/gecko_api_actions';
import { fetchUserDetails } from '../../actions/user_actions'
import BuySellBox from './buy_sell_box';
import { clearErrors } from '../../actions/transaction_actions';

const msp = (state,ownProps) => {
    return({
        currentUser: state.session.id,
        id: ownProps.id,
        coinInfo: state.entities.coinInfo,
        errors: state.errors,
        userBuyingPower: state.entities.users.userDetails.buyingPower
    })
}

const mdp = dispatch => ({
    createTransaction: (transaction) => dispatch(createTransaction(transaction)),
    fetchCoinInfo: (id) => dispatch(fetchCoinInfo(id)),
    clearErrors: () => dispatch(clearErrors()),
    fetchUserDetails: (id) => dispatch(fetchUserDetails(id))
})

export default connect(msp,mdp)(BuySellBox)