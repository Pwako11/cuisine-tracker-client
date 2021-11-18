
// import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import React from 'react';
import { connect } from "react-redux";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Dishes from './components/Dish.js';
import NewDishForm from './components/NewDish.js';
import Logout from './components/Logout.js';
import Signup from './components/Signup.js';
import NavBar from './components/NavBar.js';
import { getDishes } from './actions/dishes';
import MainContainer from "./components/MainContainer.js";
import { getCurrentUser } from "./actions/currentUser.js";


class App extends React.Component {
  
  componentDidMount(){
    this.props.getCurrentUser()
    this.props.getDishes()

  }


  render() {

    const {currentUser, loggedIn} = this.props

    console.log ("Logged in", loggedIn)
    console.log ("Current User", currentUser)
    

    return (     
      
      <div className="App">
        <header className="App-header">
          <div className= "welcome">
            <div className = "Welcome-LoggedIn"><h3>{ currentUser ? `Welcome ${currentUser.data.attributes.name}`: "" }</h3></div>
            <nav class="navbar navbar-light">{ loggedIn ? <NavBar location={this.props.location}/> : null }</nav>
          </div>

            <div className= "routes">
              <Switch>
                <Route exact path="/" render={() => loggedIn ? <MainContainer /> : <Home />} />
                <Route exact path="/login" component= {Login} />
                <Route exact path="/logout" component= {Logout} />
                <Route exact path="/signup" component= {Signup } />
                <Route exact path="/dishes" component= {Dishes } />
                <Route exact path="/dishes/new" component= {NewDishForm } />
            
              </Switch>
            </div> 

        </header>

        <div className="main">
  
          <div className= "Welcome-Loggedout">{loggedIn ? <MainContainer /> : <Home />}</div>
        </div>
      </div>
    );

  }
}

const mapStateToProps = state =>{

  return{
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser    
  }
}

export default withRouter(connect(mapStateToProps, {getCurrentUser, getDishes})(App));
