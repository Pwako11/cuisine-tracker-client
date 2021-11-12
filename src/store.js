import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './reducers/users.js';
import currrentUser from './reducers/currentUser.js';
import loginForm from './reducers/loginForm.js';
// import { devToolsEnhancer } from 'redux-devtools-extension';

const reducer = combineReducers({
    users: usersReducer,
    currrentUser, 
    loginForm
  })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store