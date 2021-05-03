import { RECEIVE_TRANSACTIONS } from '../actions/transaction_actions'

const transactionsIndexReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_TRANSACTIONS:
            console.log(action.transactions)
            return action.transactions
        default:
            return oldState;
    }
}

export default transactionsIndexReducer