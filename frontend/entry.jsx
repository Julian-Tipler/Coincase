import React from "react";
import ReactDOM from "react-dom";
import * as geckoApiActions from './actions/gecko_api_actions';
import configureStore from './store/store'
import * as userApiActions from './actions/user_actions'

import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    var store = null
    if (window.currentUser){
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser}
            },
            session: {id: window.currentUser.id}
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore()
    }

    //testing
    window.getState = store.getState
    window.geckoApiActions = geckoApiActions
    window.userActions = userApiActions
    window.store = store
    //testing
    ReactDOM.render(<Root store={store}/>, root);
});