import * as APIUtil from '../util/gecko_api_util'

export const RECEIVE_TOP_COINS = 'RECEIVE_TOP_COINS'
export const RECEIVE_COIN_INFO = 'RECEIVE_COIN_INFO'
export const RECEIVE_COIN_HISTORICAL_DATA = 'RECEIVE_COIN_HISTORICAL_DATA'
export const RECEIVE_TOP_SIX_HISTORICAL_DATA = 'RECEIVE_TOP_SIX_HISTORICAL_DATA'


const receiveCoinsIndex = (coins) => ({
    type: RECEIVE_TOP_COINS,
    coins
})

const receiveCoinInfo = (coin) => ({
    type: RECEIVE_COIN_INFO,
    coin
})

const receiveCoinHistoricalData = (coin) => ({
    type: RECEIVE_COIN_HISTORICAL_DATA,
    coin
})

const receiveTopSixHistoricalData = (coin,id,idx) => ({
    type: RECEIVE_TOP_SIX_HISTORICAL_DATA,
    coin,
    id,
    idx
})



export const fetchCoinsIndex = () => (dispatch) => (
    APIUtil.fetchCoinsIndex()
        .then((coins) => dispatch(receiveCoinsIndex(coins)))
)

export const fetchCoinInfo = (id) => (dispatch) => (
    APIUtil.fetchCoinInfo(id)
        .then((coin) => dispatch(receiveCoinInfo(coin)))
)

export const fetchCoinHistoricalData = (id) => (dispatch) => {
    return(
    APIUtil.fetchCoinHistoricalData(id)
        .then((coin) => dispatch(receiveCoinHistoricalData(coin)))
    )
}

export const fetchTopSixHistoricalData = (id, idx) => dispatch => {
    return(
    APIUtil.fetchCoinHistoricalData(id)
        .then((coin) => dispatch(receiveTopSixHistoricalData(coin,id,idx)))
    )
}


//removeCoinInfo needed. Unless it replaces each time?