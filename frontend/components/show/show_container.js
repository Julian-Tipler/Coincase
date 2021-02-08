import { connect } from 'react-redux';
import Show from './show'
import { fetchCoinInfo } from '../../actions/gecko_api_actions';

const msp = (state,ownProps) => ({
    id: ownProps.match.params.id,
    coinInfo: state.entities.coinInfo
})

const mdp = dispatch => ({
    fetchCoinInfo: (id) => dispatch(fetchCoinInfo(id)),
})

export default connect(msp,mdp)(Show)