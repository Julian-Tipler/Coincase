import * as userAPIUtil from '../util/user_api_util'
import * as APIUtil from '../util/gecko_api_util'
import userDetails from '../reducers/user_details_reducer';



export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO'
export const RECEIVE_USER_COIN_PRICE = 'RECEIVE_USER_COIN_PRICE'
export const RECEIVE_USER_DETAILS = 'RECEIVE_USER_DETAILS'
export const RESET_PORTFOLIO = 'RESET_PORTFOLIO'

const receivePortfolio = portfolio => ({
    type: RECEIVE_PORTFOLIO,
    portfolio,
});

const receiveUserCoinPrice = userCoinPrice => ({
    type: RECEIVE_USER_COIN_PRICE,
    userCoinPrice
})

export const receiveUserDetails = userDetails => ({
    type: RECEIVE_USER_DETAILS,
    userDetails
})


export const fetchPortfolio = () => dispatch => (
    userAPIUtil.fetchPortfolio()
        .then(portfolio => {
            dispatch(receivePortfolio(portfolio))
            Object.keys(portfolio).forEach(id => {
                dispatch(fetchUserCoinPrice(id))
            })
        })
)

export const fetchUserCoinPrice = (id) => dispatch => {
    return(
        APIUtil.fetchCoinInfo(id)
        .then(userCoinPrice => dispatch(receiveUserCoinPrice(userCoinPrice)))
    )
}

export const fetchUserDetails = (id) => dispatch => {
    return(
        userAPIUtil.fetchUserDetails(id)
        .then(userDetails => dispatch(receiveUserDetails(userDetails)))
    )
}

export const resetPortfolio = () => ({
    type: RESET_PORTFOLIO
})