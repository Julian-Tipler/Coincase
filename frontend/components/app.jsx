import React from 'react';
import LoginFormContainer from './session/login_form_container'
import SignUpFormContainer from './session/signup_form_container'
import WelcomeContainer from './welcome/welcome_container'
import HeaderContainer from './header/headercontainer'
import {
    Route,
    Redirect,
    Switch,
    Link,
} from 'react-router-dom';


const App = () => (
    <div>
        <header>
            <HeaderContainer/>  
        </header>
        <Switch>
            <Route exact path="/" component = {WelcomeContainer}/>
            <Route exact path="/login" component = {LoginFormContainer}/>
            <Route exact path="/signup" component = {SignUpFormContainer}/>
            <Redirect to='/'/>
        </Switch>
    </div>
)

export default App;