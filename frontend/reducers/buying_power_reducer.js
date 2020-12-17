import { RECEIVE_USER_DETAILS } from '../actions/user_actions'

const buyingPower = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_USER_DETAILS:
            return Object.assign(action.userDetails.buying_power)
        default:
            return oldState;
    }
}

export default buyingPower