import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/ex';


export default () => {
    const store = createStore( combineReducers( {expense: expenseReducer} ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
} 
