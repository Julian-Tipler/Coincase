import { connect } from 'react-redux';
import CoinGraph from './coin_graph'
import { fetchCoinHistoricalData } from '../../actions/gecko_api_actions';

const msp = (state, ownProps) => {
    return ({
        // id: ownProps.id,
        coinHistoricalData: state.entities.coinHistoricalData
    })
}


const mdp = dispatch => ({
    fetchCoinHistoricalData: (id) => dispatch(fetchCoinHistoricalData(id))
})

export default connect(msp,mdp)(CoinGraph)