import { RECEIVE_PORTFOLIO } from '../actions/user_actions'

const PortfolioReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_PORTFOLIO:
            return Object.assign({}, action.portfolio)
        default:
            return oldState;
    }
}

export default PortfolioReducer