import * as APIUtil from '../util/transaction_api_util'

export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION'
export const RECEIVE_TRANSACTION_ERRORS = 'RECEIVE_TRANSACTION_ERRORS'
export const REMOVE_TRANSACTION_ERRORS = 'REMOVE_TRANSACTION_ERRORS'

const receiveTransaction = transactionResponse => ({
    type: RECEIVE_TRANSACTION,
    transactionResponse,
});

const receiveTransactionErrors = (errors) => ({
    type: RECEIVE_TRANSACTION_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: REMOVE_TRANSACTION_ERRORS,
})

export const createTransaction = transaction => dispatch => (
    APIUtil.createTransaction(transaction)
    .then(transactionResponse => dispatch(receiveTransaction(transactionResponse)), 
    err => (dispatch(receiveTransactionErrors(err.responseJSON))))
);
