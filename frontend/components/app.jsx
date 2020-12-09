import React from 'react';
import LoginFormContainer from './session/login_form_container'
import SignUpFormContainer from './session/signup_form_container'
import {
    Route,
    Redirect,
    Switch,
    Link,
} from 'react-router-dom';


const App = () => (
    <div>
        <header>
            <h1>Welcome #user</h1>  
        </header>
        <Switch>
            <Route exact path="/login" component = {LoginFormContainer}/>
            <Route exact path="/signup" component = {SignUpFormContainer}/>
            <Redirect to='/'/>
        </Switch>
    </div>
)

export default App;