import { RECEIVE_COIN_HISTORICAL_DATA } from '../actions/gecko_api_actions';

const topSixCoinsHistoricalDataReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_COIN_HISTORICAL_DATA:
            const newState = oldState.slice()
            newState.push(action.coin)
            return newState
        // case RESET_TOP_SIX_HISTORICAL_DATA:
        //     return []
        default:
            return oldState;
    }
}

export default topSixCoinsHistoricalDataReducer