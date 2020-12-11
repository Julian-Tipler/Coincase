import SignedInHeader from './signed_in_header'
import {logout} from '../../actions/session_actions'

import { connect } from 'react-redux';

const msp = (state) => ({

})

const mdp = dispatch => ({
    logout: ()=> dispatch(logout())
})

export default connect(msp,mdp)(SignedInHeader)