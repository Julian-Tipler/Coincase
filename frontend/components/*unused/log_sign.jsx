import React from 'react';
import LoginFormContainer from '../session/login_form_container'
import SignupFormContainer from '../session/signup_form_container'
import { Link } from 'react-router-dom'

class LogSign extends React.Component {
    render() {
        
        return(
            <div>
                <h3>Sign in below:</h3>
                <LoginFormContainer/>
                <h4>New User?</h4>
                <Link to='/signup'>SIGN UP</Link>
            </div>
        )
    }
}

export default LogSign