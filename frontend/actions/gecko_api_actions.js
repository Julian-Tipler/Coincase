import * as APIUtil from '../util/gecko_api_util'

export const RECEIVE_TOP_COINS = 'RECEIVE_TOP_COINS'
export const RECEIVE_COIN = 'RECEIVE_COIN'


const receiveTopCoins = (coins) => ({
    type: RECEIVE_TOP_COINS,
    coins
})

const receiveCoin = (coin) => ({
    type: RECEIVE_COIN,
    coin
})

export const fetchTopCoins = () => (dispatch) => (
    APIUtil.fetchTopCoins()
        .then((coins) => dispatch(receiveTopCoins(coins)))
)

// export const fetchCoin = (id) => (dispatch) => (
//     APIUtil.fetchCoin(id)
//         .then((coin) => dispatch(receiveCoin(coin)))
// )

export const fetchDailyData = (id) => (dispatch) => (
    APIUtil.fetchDailyData(id)
        .then((coin) => dispatch(receiveCoin(coin)))
)