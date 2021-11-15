
// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {connect} from "react-redux"
import {Route, withRouter, Routes} from "react-router-dom"
import Login from "./components/Login.js"
import { getCurrentUser } from "./actions/currentUser.js"
import { getDishes } from './actions/dishes';
import Logout from './components/Logout.js';
import NavBar from './components/NavBar.js';
import Home from "./components/Home.js"
import MainContainer from "./components/MainContainer.js"


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
          <div className = "Welcome-LoggedIn"><h3>{ currentUser ? `Welcome ${currentUser.data.attributes.name}`: <Login /> }</h3></div>
          <nav class="navbar navbar-light">{ loggedIn ? <NavBar location={this.props.location}/> : null }</nav>
          {loggedIn ? <MainContainer/> : ""}
        </header>
        
        <div className= "main">
          <div className="routes">
              <Routes>
                <Route exact path='/' render={() => loggedIn ? <MainContainer /> : <Home />} />
                <Route path='/login' component={Login}/> 
                <Route path='/logout' component={Logout}/>
              </Routes>
          </div>
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

export default connect(mapStateToProps, {getCurrentUser, getDishes})(App);
