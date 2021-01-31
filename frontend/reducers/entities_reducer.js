import { combineReducers } from 'redux'

import usersReducer from "./users_reducer";
import coinsReducer from './coins_reducer'
import coinInfoReducer from './coin_info'
import coinHistoricalDataReducer from './coin_historical_data'
import topSixCoinsHistoricalDataReducer from './top_six_coin_historical_data'
import transactionsReducer from './transactions_reducer'
import transactionsIndexReducer from './transactions_index_reducer';
    

const entitiesReducer = combineReducers({
    coins: coinsReducer,
    coinInfo: coinInfoReducer,
    coinHistoricalData: coinHistoricalDataReducer,
    topSixCoinsHistoricalData: topSixCoinsHistoricalDataReducer,
    transactions: transactionsReducer,
    transactionsIndex: transactionsIndexReducer,
    users: usersReducer,
});

export default entitiesReducer;
