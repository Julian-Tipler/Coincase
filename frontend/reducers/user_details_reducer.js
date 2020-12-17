import { combineReducers } from 'redux'
import buyingPowerReducer from './buying_power_reducer'

const userDetails = combineReducers({
    buyingPower: buyingPowerReducer
})

export default userDetails