import { RECEIVE_COIN_HISTORICAL_DATA } from '../actions/gecko_api_actions'

const coinHistoricalDataReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_COIN_HISTORICAL_DATA:
            return Object.assign({}, action.coin)
        default:
            return oldState;
    }
}

export default coinHistoricalDataReducer