import { combineReducers } from 'redux'
import buyingPowerReducer from './buying_power_reducer'
import transactions_index_reducer from './transactions_index_reducer'

const userDetails = combineReducers({
    buyingPower: buyingPowerReducer,
    transactions_index: transactions_index_reducer
})

export default userDetails