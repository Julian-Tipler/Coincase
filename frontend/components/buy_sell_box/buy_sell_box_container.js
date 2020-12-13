import { connect } from 'react-redux';
import BuySellBox from './buy_sell_box'

const msp = (state) => {
    console.log(state)
    return(
        state
    )
}

const mdp = dispatch => ({

})

export default connect(msp,mdp)(BuySellBox)