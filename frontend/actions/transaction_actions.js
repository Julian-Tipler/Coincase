import * as APIUtil from '../util/transaction_api_util'
import { openModal}  from './modal_actions'
import { receiveUserDetails, fetchPortfolio } from './user_actions'


export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION'
export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTION_INDEX'
export const RECEIVE_TRANSACTION_ERRORS = 'RECEIVE_TRANSACTION_ERRORS'
export const REMOVE_TRANSACTION_ERRORS = 'REMOVE_TRANSACTION_ERRORS'

const receiveTransaction = transactionResponse => ({
    type: RECEIVE_TRANSACTION,
    transactionResponse,
});

const receiveTransactions = transactions => ({
    type: RECEIVE_TRANSACTIONS,
    transactions
})

const receiveTransactionErrors = (errors) => ({
    type: RECEIVE_TRANSACTION_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: REMOVE_TRANSACTION_ERRORS,
})

export const createTransaction = transaction => dispatch => (
    APIUtil.createTransaction(transaction)
    .then(transactionResponse => {
        dispatch(receiveTransaction(transactionResponse))
        dispatch(receiveUserDetails(transactionResponse))
        dispatch(fetchPortfolio())
        dispatch(openModal('successfulTransaction'))
    }, 
    err => (dispatch(receiveTransactionErrors(err.responseJSON))))
);

export const fetchTransactions = () => dispatch => (
    APIUtil.fetchTransactions()
    .then(transactions=> dispatch(receiveTransactions(transactions.transactions)))
)
