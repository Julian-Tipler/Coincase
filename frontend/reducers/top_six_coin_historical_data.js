import { RECEIVE_COIN_HISTORICAL_DATA, RECEIVE_TOP_SIX_HISTORICAL_DATA} from '../actions/gecko_api_actions';

const topSixCoinsHistoricalDataReducer = (oldState = {0:null,1:null,2:null,3:null,4:null,5:null}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({},oldState)
    switch (action.type) {
        case RECEIVE_TOP_SIX_HISTORICAL_DATA:
            newState[action.idx] = [action.id, action.coin, action.image, action.current_price];
            return newState;
        default:
            return oldState;
    }
}

export default topSixCoinsHistoricalDataReducer