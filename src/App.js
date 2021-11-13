
// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {connect} from "react-redux"
import Login from "./components/Login.js"
import {getCurrentUser} from "./actions/currentUser.js"
import Logout from './components/Logout';

class App extends React.Component {
  
  componentDidMount(){
    this.props.getCurrentUser()

  }


  render() {

    const {currentUser, loggedIn} = this.props

    console.log ("Logged in", loggedIn)
    console.log ("Current User", currentUser)
    return (
      <div className="App">
        <header className="App-header">
          <div className = "Welcome-LoggedIn"><h3>{ currentUser ? `Welcome ${currentUser.data.attributes.name}`: "" }</h3></div>
    
          <Login/>
          <Logout />
        </header>
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

export default connect(mapStateToProps, {getCurrentUser})(App);
