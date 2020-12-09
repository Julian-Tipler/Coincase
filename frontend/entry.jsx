import React from "react";
import ReactDOM from "react-dom";
import * as utilActions from './util/session_api_util';
import configureStore from './store/store'

import Root from './components/root'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    //testing
    window.utilActions = utilActions
    window.getState = store.getState
    //testing
    ReactDOM.render(<Root store={store}/>, root);
});