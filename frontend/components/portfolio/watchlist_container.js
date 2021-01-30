import { connect } from 'react-redux';
import WatchList from './watchlist'
import { fetchTopCoins } from '../../actions/gecko_api_actions'
import { fetchCoinHistoricalData, fetchTopSixHistoricalData } from '../../actions/gecko_api_actions';

const msp = (state) => {
    return ({
        topCoins: state.entities.coins,
        topSixCoinsHistoricalData: state.entities.topSixCoinsHistoricalData
    })
}

const mdp = dispatch => ({
    fetchTopCoins: () => dispatch(fetchTopCoins()),
    fetchCoinHistoricalData: (id) => dispatch(fetchCoinHistoricalData(id)),
    fetchTopSixHistoricalData: (id, idx) => dispatch(fetchTopSixHistoricalData(id,idx))
})

export default connect(msp,mdp)(WatchList)