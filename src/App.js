
// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {connect} from "react-redux"
import Login from "./components/Login.js"
import {getCurrentUser} from "./actions/currentUser.js"

class App extends React.Component {
  
  componentDidMount(){
    this.props.getCurrentUser()

  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Cuisine Tracker</h1>
          <Login/>
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
