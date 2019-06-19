import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expenseReducer from '../reducers/ex';
import thunk from "redux-thunk";

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
	const store = createStore(
		combineReducers({
			expense: expenseReducer
		}),
	composeEnhance(applyMiddleware(thunk)))
	return store
} 
