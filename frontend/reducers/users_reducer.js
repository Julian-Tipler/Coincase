import { combineReducers } from 'redux';
import portfolioReducer from './user_portfolio_reducer'
import userCoinPricesReducer from './user_coin_prices_reducer'
import userDetailsReducer from './user_details_reducer'

const usersReducer = combineReducers({
    portfolio: portfolioReducer,
    userCoinPrices: userCoinPricesReducer,
    userDetails: userDetailsReducer
})


export default usersReducer