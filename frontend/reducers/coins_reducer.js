import {RECEIVE_COIN_HISTORICAL_DATA, RECEIVE_TOP_COINS, RECEIVE_COIN_INFO, RECEIVE_TOP_SIX_COINS_HISTORICAL_DATA, REMOVE_COINS} from '../actions/gecko_api_actions'

const coinsReducer = (state = { coinsIndex: {}, coinInfo: {}, coinHistoricalData: {}, topSixCoinsHistoricalData: []}, action) => {
    // console.log('oldState:',state)
    Object.freeze(state);
    let newState = Object.assign({},state)
    switch (action.type) {
        case RECEIVE_TOP_COINS:
            newState.coinsIndex = action.coins
            return newState;
        case RECEIVE_COIN_INFO:
            newState.coinInfo = action.coin
            return newState;
        case RECEIVE_COIN_HISTORICAL_DATA:
            newState.coinHistoricalData = action.coin
            return newState;
        case RECEIVE_TOP_SIX_COINS_HISTORICAL_DATA:
            var obj = {}
            const name = action.name
            const data = action.coin
            obj[name] = data
            // newState.topSixCoinsHistoricalData[action.idx] = obj
            newState.topSixCoinsHistoricalData.push(obj)
            // console.log(newState)
            return {...newState}
        case REMOVE_COINS:
            const otherState = { coinsIndex: {}, coinInfo: {}, coinHistoricalData: {}, topSixCoinsHistoricalData: []}
            return {...otherState}
        default:
            return newState;
    }
}

export default coinsReducer