import {RECEIVE_COIN_HISTORICAL_DATA, RECEIVE_TOP_COINS} from '../actions/gecko_api_actions'

const coinsReducer = (state = { coinIndex: {}, coinInfo: {}, coinHistoricalData: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({},state)
    switch (action.type) {
        case RECEIVE_TOP_COINS:
            newState.coinIndex = action.coins
            return newState
        case RECEIVE_COIN_INFO:
            newState.coinInfo = action.coin
            return newState
        case RECEIVE_COIN_HISTORICAL_DATA:
            newState.coinHistoricalData = action.coin
        default:
            return oldState;
    }
}

export default coinsReducer