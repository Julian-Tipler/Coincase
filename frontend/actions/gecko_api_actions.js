import * as APIUtil from '../util/gecko_api_util'

export const RECEIVE_TOP_COINS = 'RECEIVE_TOP_COINS'

const receiveTopCoins = (coins) => ({
    type: RECEIVE_TOP_COINS,
    coins
})

export const fetchTopCoins = () => (dispatch) => (
    APIUtil.fetchTopCoins()
        .then((coins) => dispatch(receiveTopCoins(coins)))
)