import { RECEIVE_COIN_INFO } from '../actions/gecko_api_actions'

const coinInfoReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_COIN_INFO:
            return Object.assign({}, action.coin)
        default:
            return oldState;
    }
}

export default coinInfoReducer