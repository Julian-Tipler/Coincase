import SignedInHeader from './signed_in_header'
import {logout} from '../../actions/session_actions'

import { connect } from 'react-redux';

const msp = (state,ownProps) => {
    let queryString = ownProps.match.path.slice(1)
    queryString = queryString.charAt(0).toUpperCase() + queryString.slice(1)
    return {
        queryString: queryString
    }
}

const mdp = dispatch => ({
    logout: ()=> dispatch(logout())
})

export default connect(msp,mdp)(SignedInHeader)