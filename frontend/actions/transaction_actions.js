import * as APIUtil from '../util/transaction_api_util'

export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION'

const receiveTransaction = transaction => ({
    type: RECEIVE_TRANSACTION,
    transaction,
});

export const createTransaction = transaction => dispatch => (
    APIUtil.createTransaction(transaction).then(transaction => (
        dispatch(receiveTransaction(transaction))
    ))
);
