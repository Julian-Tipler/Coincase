import { RECEIVE_COIN } from '../actions/gecko_api_actions'

const targetCoinReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_COIN:
            return Object.assign({}, action.coin)
        default:
            return oldState;
    }
}

export default targetCoinReducer