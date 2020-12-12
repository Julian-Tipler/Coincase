import React from 'react';
import HeaderContainer from './header/header_container'
import SignedInHeaderContainer from './header/signed_in_header_container'
import WelcomeContainer from './welcome/welcome'
import LoginFormContainer from './session/login_form_container'
import SignUpFormContainer from './session/signup_form_container'
import HomeContainer from './home/home_container'
import PortfolioContainer from './portfolio/portfolio_container'
import PricesContainer from './prices/prices_container'
import ShowContainer from './show/show_container'
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
            <AuthRoute exact path={["/login","/signup"]} component={HeaderContainer} />
            <ProtectedRoute exact path={["/users", "/portfolio", "/prices"]} component={SignedInHeaderContainer} />
        </Switch>
        </header>
        <Switch>
            <Route exact path="/" component={WelcomeContainer} />
            <AuthRoute exact path="/login" component = {LoginFormContainer}/>
            <AuthRoute exact path="/signup" component = {SignUpFormContainer}/>
            <ProtectedRoute exact path="/users" component={HomeContainer} />
            <ProtectedRoute exact path="/portfolio" component={PortfolioContainer}/>
            <ProtectedRoute exact path="/prices" component={PricesContainer}/>
            <ProtectedRoute exact path="/show/:id" component = {ShowContainer}/>
            <Redirect to='/'/>
        </Switch>
    </div>
)

export default App;