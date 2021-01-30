import { connect } from 'react-redux';
import WatchList from './watchlist'
import { fetchCoinsIndex, fetchTopSixCoinsHistoricalData, fetchRemoveCoins, fetchCoinHistoricalData } from '../../actions/gecko_api_actions'

const msp = (state) => {
    // console.log(state.entities.coins.topSixCoinsHistoricalData)
    return ({
        coinsIndex: state.entities.coins.coinsIndex,
        topSixCoinsHistoricalData: state.entities.coins.topSixCoinsHistoricalData,
        coinHistoricalData: state.entities.coins.coinHistoricalData
    })
}

const mdp = dispatch => ({
    fetchCoinsIndex: () => dispatch(fetchCoinsIndex()),
    fetchTopSixCoinsHistoricalData: () => dispatch(fetchTopSixCoinsHistoricalData()),
    fetchRemoveCoins: () => dispatch(fetchRemoveCoins()),
    fetchCoinHistoricalData: (coin)=> dispatch(fetchCoinHistoricalData(coin))
})

export default connect(msp,mdp)(WatchList)