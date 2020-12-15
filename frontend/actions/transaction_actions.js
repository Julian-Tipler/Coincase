import * as APIUtil from '../util/transaction_api_util'

export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION'

const receiveTransaction = transactionResponse => ({
    type: RECEIVE_TRANSACTION,
    transactionResponse,
});

export const createTransaction = transaction => dispatch => (
    APIUtil.createTransaction(transaction).then(transactionResponse => (
        dispatch(receiveTransaction(transactionResponse))
    ))
);
