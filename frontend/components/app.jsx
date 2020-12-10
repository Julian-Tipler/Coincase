import React from 'react';
import LoginFormContainer from './session/login_form_container'
import SignUpFormContainer from './session/signup_form_container'
import WelcomeContainer from './welcome/welcome'
import HeaderContainer from './header/headercontainer'
import {
    Route,
    Redirect,
    Switch,
    Link,
} from 'react-router-dom';

//const theme= blue

const App = () => (
    <div>
        <header>
            <Route path="/" component ={HeaderContainer} />
            <Route exact path="/" component={WelcomeContainer} />
        </header>
        <Switch>
            
            <Route exact path="/login" component = {LoginFormContainer}/>
            <Route exact path="/signup" component = {SignUpFormContainer}/>
            <Redirect to='/'/>
        </Switch>
    </div>
)

export default App;