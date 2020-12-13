import { combineReducers } from 'redux'

import usersReducer from "./users_reducer";
import coins_reducer from './coins_reducer'
import targetCoinReducer from './target_coin_reducer'
import transactionsReducer from './transactions_reducer'
    

const entitiesReducer = combineReducers({
    users: usersReducer,
    coins: coins_reducer,
    targetCoin: targetCoinReducer,
    transactions: transactionsReducer
});

export default entitiesReducer;
