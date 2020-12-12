import {RECEIVE_TOP_COINS} from '../actions/gecko_api_actions'

const coinsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_TOP_COINS:
            return Object.assign({},action.coins)
        default:
            return oldState;
    }
}

export default coinsReducer