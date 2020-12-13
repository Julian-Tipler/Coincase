import {RECEIVE_TOP_COINS, RECEIVE_COIN} from '../actions/gecko_api_actions'

const coinsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_TOP_COINS:
            return Object.assign({},action.coins)
        case RECEIVE_COIN:
            return Object.assign({},action.coin)
        default:
            return oldState;
    }
}

export default coinsReducer