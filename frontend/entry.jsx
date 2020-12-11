import React from "react";
import ReactDOM from "react-dom";
import * as utilActions from './util/session_api_util';
import configureStore from './store/store'

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
    window.utilActions = utilActions
    window.getState = store.getState
    //testing
    ReactDOM.render(<Root store={store}/>, root);
});