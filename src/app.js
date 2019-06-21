import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom"
//store
import configureStore from "./store/configureStore";
const store = configureStore();
//redux
import { Provider } from 'react-redux';
// components
import Dashboard from "./dashboard";
import Edit from "./comp/Edit";
import "./firebase/firebase";


const jsx = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <p>Heloo</p>
                <Route path="/" component={Dashboard} exact={true}/>
                <Route path="/:id" component={Edit} exact={true}/>
            </div>
        </BrowserRouter>
    </Provider>
);


ReactDOM.render(jsx, document.getElementById("jsx"));
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}
