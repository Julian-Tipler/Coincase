import { connect } from 'react-redux';
import SessionForm from './session_form'
import { signup } from '../../actions/session_actions';

const msp = (state) => ({
    formType: 'sign up',
    errors: state.errors
})

const mdp = dispatch => ({
    action: (user) => dispatch(signup(user))
})

export default connect(msp,mdp)(SessionForm)