import { RECEIVE_USER_DETAILS } from '../actions/user_actions'

const transactionsIndexReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_USER_DETAILS:
            return Object.assign(action.userDetails.transactions)
        default:
            return oldState;
    }
}

export default transactionsIndexReducer