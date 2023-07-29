import React from "react";
import ReactDOM from "react-dom";
import * as geckoApiActions from './actions/gecko_api_actions';
import configureStore from './store/store'
import * as userApiActions from './actions/user_actions'

import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
    console.log("here")
    const root = document.getElementById("root");
    console.log("root", root)
    var store = null
    if (window.currentUser){
        const preloadedState = {
            session: {id: window.currentUser.id}
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore()
    }

    window.getState = store.getState
    window.geckoApiActions = geckoApiActions
    window.userActions = userApiActions
    window.store = store
    console.log(window.getState, window.geckoApiActions, window.userActions, window.store)
    
    ReactDOM.render(<Root store={store}/>, root);
});