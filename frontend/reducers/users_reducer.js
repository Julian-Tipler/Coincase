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


// const usersReducer = (oldState = {}, action) => {
//     Object.freeze(oldState);
//     switch(action.type) {
//         case RECEIVE_CURRENT_USER:
//             return Object.assign({}, oldState, {[action.currentUser.id]:action.currentUser})
//         case LOGOUT_CURRENT_USER:
//             return {}
//         default:
//             return oldState;
//     }
// }