import { connect } from 'react-redux';
import Home from './home'
import { fetchPortfolio, resetPortfolio } from '../../actions/user_actions'
import { fetchTransactions } from '../../actions/transaction_actions'
import { fetchUserDetails } from '../../actions/user_actions';

const msp = (state) => ({
    currentUser: state.session.id,
    portfolio: state.entities.users.portfolio,
    userCoinPrices: state.entities.users.userCoinPrices,
    transactionsIndex: state.entities.transactionsIndex,
    userBuyingPower: state.entities.users.userDetails.buyingPower,

})

const mdp = dispatch => ({
    fetchPortfolio: ()=> dispatch(fetchPortfolio()),
    fetchTransactions: ()=> dispatch(fetchTransactions()),
    resetPortfolio: ()=> dispatch(resetPortfolio()),
    fetchUserDetails: (id)=> dispatch(fetchUserDetails(id))
})

export default connect(msp,mdp)(Home)