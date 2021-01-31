import { connect } from 'react-redux';
import Portfolio from './portfolio'
import { fetchPortfolio } from '../../actions/user_actions'
import { fetchTransactions } from '../../actions/transaction_actions'

const msp = (state) => ({
    portfolio: state.entities.users.portfolio,
    userCoinPrices: state.entities.users.userCoinPrices,
    transactions: state.entities.users
})

const mdp = dispatch => ({
    fetchPortfolio: ()=> dispatch(fetchPortfolio()),
    fetchTransactions: ()=> dispatch(fetchTransactions())
})

export default connect(msp, mdp)(Portfolio)