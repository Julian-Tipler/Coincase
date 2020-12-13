import { connect } from 'react-redux';
import { fetchCoin } from '../../actions/gecko_api_actions';
import Show from './show'

const msp = (state,ownProps) => ({
    coinId: ownProps.match.params.id,
    coin: state.coins
})

const mdp = dispatch => ({
    fetchCoin: (id)=> dispatch(fetchCoin(id))
})

export default connect(msp,mdp)(Show)