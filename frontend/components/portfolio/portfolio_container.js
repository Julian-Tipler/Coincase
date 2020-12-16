import { connect } from 'react-redux';
import Portfolio from './portfolio'
import { fetchPortfolio } from '../../actions/user_actions'

const msp = (state) => ({
    portfolio: state.entities.users.portfolio,
    userCoinPrices: state.entities.users.userCoinPrices
})

const mdp = dispatch => ({
    fetchPortfolio: ()=> dispatch(fetchPortfolio())
})

export default connect(msp, mdp)(Portfolio)