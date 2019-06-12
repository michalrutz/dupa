import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom"
//store
import configureStore from "./store/configureStore";
const store = configureStore();
import { addExpense } from "./actions/ex"
//redux
import { Provider } from 'react-redux';
// components
import Dashboard from "./dashboard";
import Edit from "./comp/Edit";

const root = document.getElementById("jsx");

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

// const one = store.dispatch( addExpense( {description: "Rent"} ) );
console.log(store.getState())

ReactDOM.render(jsx,root);
if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}