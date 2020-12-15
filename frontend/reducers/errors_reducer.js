import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import transactions from './transactions_errors_reducer'

export default combineReducers({
    session:session,
    transactions:transactions
});