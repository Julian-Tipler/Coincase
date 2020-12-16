import { RECEIVE_USER_COIN_PRICE } from '../actions/user_actions'

const userCoinPrices = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_USER_COIN_PRICE:
            const newprice = { [action.userCoinPrice.id]: action.userCoinPrice };
            return Object.assign({}, oldState, newprice);        
        default:
            return oldState;
    }
}

export default userCoinPrices