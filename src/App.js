
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
import DishCard from './components/DishCard.js';
import NewDishForm from './components/NewDish.js';
import Logout from './components/Logout.js';
import Signup from './components/Signup.js';
import NavBar from './components/NavBar.js';
import { getDishes } from './actions/dishes';
import MainContainer from "./components/MainContainer.js";
import { getCurrentUser } from "./actions/currentUser.js";
import DishMatchForm from './components/DishMatch.js';


class App extends React.Component {
  
  componentDidMount(){
    this.props.getCurrentUser()
    this.props.getDishes()

  }


  render() {

    const {currentUser, loggedIn, dishes} = this.props 

    return (     
      
      <div className="App">
        <header className="App-header">
          <div className= "welcome">
            <div className = "Welcome-LoggedIn"><h3>{ currentUser ? `Welcome ${currentUser.data.attributes.name}`: "" }</h3></div>
            <nav className="navbar navbar-light">{ loggedIn ? <NavBar location={this.props.location}/> : null }</nav>
          </div>

            <div className= "routes">
              <Switch>
                <Route exact path="/" render={({history}) => loggedIn ? <MainContainer history={history} />  : <Home />} />
                <Route exact path="/login" component= {Login} />
                <Route exact path="/logout" component= {Logout} />
                <Route exact path="/signup" component= {Signup } />
                <Route exact path="/dishes" component= {Dishes } />
                <Route exact path="/dishes/new" component= {NewDishForm } />
                <Route exact path="/search" component= {DishMatchForm} />
                <Route exact path="/dishes/:id" render={props =>{
                  const dish =  dishes.find(rec => rec.id === props.match.params.id)          
                  return<DishCard dish={dish} {...props}/>
                  }
                }/>
              </Switch>
            </div> 

        </header>
      </div>
    );

  }
}

const mapStateToProps = state =>{

  return{
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser,
    dishes: state.dish    
  }
}

export default withRouter(connect(mapStateToProps, {getCurrentUser, getDishes})(App));
