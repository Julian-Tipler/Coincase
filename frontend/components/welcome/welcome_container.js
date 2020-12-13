import { connect } from 'react-redux';
import { fetchTopCoins } from '../../actions/gecko_api_actions';
import Welcome from './welcome'

const msp = (state) => ({
    coins: Object.values(state.entities.coins)
})

const mdp = dispatch => ({
    fetchTopCoins: () => dispatch(fetchTopCoins())
})

export default connect(msp, mdp)(Welcome)