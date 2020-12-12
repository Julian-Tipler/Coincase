import { combineReducers } from 'redux'

import usersReducer from "./users_reducer";
import coins_reducer from './coins_reducer'


const entitiesReducer = combineReducers({
    users: usersReducer,
    coins: coins_reducer
});

export default entitiesReducer;
