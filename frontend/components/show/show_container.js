import { connect } from 'react-redux';
import Show from './show'

const msp = (state,ownProps) => ({
    coinSymbol: ownProps.match.params.id
})

const mdp = dispatch => ({

})

export default connect(msp,mdp)(Show)