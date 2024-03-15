import { connect } from 'react-redux';
import { fetchTopFourCoins } from "../../actions/gecko_api_actions";
import Welcome from './welcome'

const msp = (state) => ({
    coins: Object.values(state.entities.coins)
})

const mdp = (dispatch) => ({
  fetchTopFourCoins: () => dispatch(fetchTopFourCoins()),
});

export default connect(msp, mdp)(Welcome)