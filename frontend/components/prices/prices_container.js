import { connect } from 'react-redux';
import { fetchCoinsIndex } from '../../actions/gecko_api_actions';
import Prices from './prices'

const msp = (state) => ({
    coinsIndex: Object.values(state.entities.coins.coinsIndex)
})
const mdp = dispatch => ({
    fetchCoinsIndex: ()=> dispatch(fetchCoinsIndex())
})

export default connect(msp, mdp)(Prices)