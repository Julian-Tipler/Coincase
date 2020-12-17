import { connect } from 'react-redux';
import WatchList from './watchlist'
import { fetchTopCoins } from '../../actions/gecko_api_actions'

const msp = (state) => {
    return ({
        topCoins: state.entities.coins
    })
}

const mdp = dispatch => ({
    fetchTopCoins: () => dispatch(fetchTopCoins())
})

export default connect(msp,mdp)(WatchList)