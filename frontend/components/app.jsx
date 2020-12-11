import React from 'react';
import LoginFormContainer from './session/login_form_container'
import SignUpFormContainer from './session/signup_form_container'
import WelcomeContainer from './welcome/welcome'
import HeaderContainer from './header/header_container'
import UserShowContainer from './user/userShowContainer'
import SignedInHeaderContainer from './header/signed_in_header_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
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
        <Switch>
            <Route exact path="/" component ={HeaderContainer} />
            <AuthRoute exact path="/login" component={HeaderContainer} />
            <AuthRoute exact path="/signup" component={HeaderContainer} />
            <Route exact path="/users/:userId" component={SignedInHeaderContainer} />
        </Switch>
        </header>
        <Switch>
            <Route exact path="/" component={WelcomeContainer} />
            <AuthRoute exact path="/login" component = {LoginFormContainer}/>
            <AuthRoute exact path="/signup" component = {SignUpFormContainer}/>
            <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
            <Redirect to='/'/>
        </Switch>
    </div>
)

export default App;