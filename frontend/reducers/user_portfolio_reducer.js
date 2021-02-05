import { RECEIVE_PORTFOLIO, RESET_PORTFOLIO} from '../actions/user_actions'

const PortfolioReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_PORTFOLIO:
            return Object.assign({}, action.portfolio)
        case RESET_PORTFOLIO:
            return {}
        default:
            return oldState;
    }
}

export default PortfolioReducer