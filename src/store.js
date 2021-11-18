import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './reducers/users.js';
import currentUser from './reducers/currentUser.js';
import loginForm from './reducers/loginForm.js';
import dish from './reducers/dish.js';
import signUpForm from './reducers/signupForm.js';
import newDishForm from './reducers/newDishForm.js';

const reducer = combineReducers({
    users: usersReducer,
    dish,
    currentUser, 
    loginForm,  
    signUpForm, 
    newDishForm
  })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store