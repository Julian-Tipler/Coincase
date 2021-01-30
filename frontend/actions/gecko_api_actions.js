import * as APIUtil from '../util/gecko_api_util'

export const RECEIVE_TOP_COINS = 'RECEIVE_TOP_COINS'
export const RECEIVE_COIN_INFO = 'RECEIVE_COIN_INFO'
export const RECEIVE_COIN_HISTORICAL_DATA = 'RECEIVE_COIN_HISTORICAL_DATA'
export const RECEIVE_TOP_SIX_COINS_HISTORICAL_DATA = 'RECEIVE_TOP_SIX_COINS_HISTORICAL_DATA'
export const REMOVE_COINS = 'REMOVE_COINS'


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

const receiveTopSixCoinsHistoricalData = (coin,idx,name) => ({
    type: RECEIVE_TOP_SIX_COINS_HISTORICAL_DATA,
    coin,
    idx,
    name
})

const removeCoins = () => ({
    type: REMOVE_COINS
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

export const fetchTopSixCoinsHistoricalData = () => dispatch => {
    return APIUtil.fetchCoinsIndex()
    .then(coins => {
        const promises = coins.slice(0,6).map(coin=> {
            return APIUtil.fetchCoinHistoricalData(coin.id)
        })
        Promise.all(promises)
        .then(arr => {
            arr.forEach((data,idx) => {
                dispatch(receiveTopSixCoinsHistoricalData(data,idx,data.id))
            })
        })
    })
}

// export const fetchTopSixCoinsHistoricalData = () => dispatch => (
//     APIUtil.fetchCoinsIndex()
//     .then(coins => {
//         return (
//             coins.slice(0,6).map((coin,idx)=> {
//             APIUtil.fetchCoinHistoricalData(coin.id)
//             .then(data=> {
//                 return dispatch(receiveTopSixCoinsHistoricalData(data,idx,coin.id))
//             })
//         })
//         )
//     })
// )

// export const fetchTopSixCoinsHistoricalData = () => dispatch => (
//     APIUtil.fetchCoinHistoricalData('bitcoin')
//     .then(coin => dispatch(receiveTopSixCoinsHistoricalData(coin,0,'bitcoin')))
// )


export const fetchRemoveCoins = () => (dispatch) => {
    dispatch(removeCoins())
}


//removeCoinInfo needed. Unless it replaces each time?