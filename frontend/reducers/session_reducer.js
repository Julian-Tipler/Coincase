import {RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS} from '../actions/session_actions'
import {LOGOUT_CURRENT_USER} from '../actions/session_actions'

const sessionReducer = (oldState = {id: null}, action)=> {
    Object.freeze(oldState);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.user.id }
        case LOGOUT_CURRENT_USER:
            return Object.assign({}, {id: null})
        case RECEIVE_SESSION_ERRORS:
        default:
            return oldState
    }
}

export default sessionReducer