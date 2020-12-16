import * as userAPIUtil from '../util/user_api_util'
import * as APIUtil from '../util/gecko_api_util'



export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO'
export const RECEIVE_USER_COIN_PRICE = 'RECEIVE_USER_COIN_PRICE'

const receivePortfolio = portfolio => ({
    type: RECEIVE_PORTFOLIO,
    portfolio,
});

const receiveUserCoinPrice = userCoinPrice => ({
    type: RECEIVE_USER_COIN_PRICE,
    userCoinPrice
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