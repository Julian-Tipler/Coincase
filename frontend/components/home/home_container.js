import { connect } from 'react-redux';
import Home from './home'
import { fetchPortfolio, resetPortfolio } from '../../actions/user_actions'
import { fetchTransactions } from '../../actions/transaction_actions'

const msp = (state) => ({
    portfolio: state.entities.users.portfolio,
    userCoinPrices: state.entities.users.userCoinPrices,
    transactionsIndex: state.entities.transactionsIndex
})

const mdp = dispatch => ({
    fetchPortfolio: ()=> dispatch(fetchPortfolio()),
    fetchTransactions: ()=> dispatch(fetchTransactions()),
    resetPortfolio: ()=> dispatch(resetPortfolio())
})

export default connect(msp,mdp)(Home)