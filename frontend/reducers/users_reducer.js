import { combineReducers } from 'redux';
import PortfolioReducer from './user_portfolio_reducer'
import userCoinPrices from './user_coin_prices_reducer'

const usersReducer = combineReducers({
    portfolio: PortfolioReducer,
    userCoinPrices: userCoinPrices
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