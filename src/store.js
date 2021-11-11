import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './reducers/users.js';
// import { devToolsEnhancer } from 'redux-devtools-extension';

const reducer = combineReducers({
    users: usersReducer
  })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store