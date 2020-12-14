import { combineReducers } from 'redux'

import usersReducer from "./users_reducer";
import coins_reducer from './coins_reducer'
import coinInfoReducer from './coin_info'
import coinHistoricalDataReducer from './coin_historical_data'
import transactionsReducer from './transactions_reducer'
    

const entitiesReducer = combineReducers({
    users: usersReducer,
    coins: coins_reducer,
    coinInfo: coinInfoReducer,
    coinHistoricalData: coinHistoricalDataReducer,
    transactions: transactionsReducer
});

export default entitiesReducer;
