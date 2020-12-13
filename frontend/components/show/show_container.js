import { connect } from 'react-redux';
import { fetchCoin } from '../../actions/gecko_api_actions';
import Show from './show'

const msp = (state,ownProps) => ({
    id: ownProps.match.params.id,
    targetCoin: state.entities.targetCoin
})

const mdp = dispatch => ({
    fetchCoin: (id)=> dispatch(fetchCoin(id))
})

export default connect(msp,mdp)(Show)