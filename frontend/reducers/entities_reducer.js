import { combineReducers } from 'redux'

import usersReducer from "./users_reducer";
import coinsReducer from './coins_reducer'
import topSixCoinsHistoricalDataReducer from './top_six_coin_historical_data'
import transactionsReducer from './transactions_reducer'
    

const entitiesReducer = combineReducers({
    coins: coinsReducer,
    transactions: transactionsReducer,
    users: usersReducer,
});

export default entitiesReducer;
