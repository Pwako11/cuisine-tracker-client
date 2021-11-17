import React from 'react'; 
import {connect} from 'react-redux';
import {logout} from '../actions/currentUser.js';
import {withRouter} from "react-router-dom"

const Logout = ({ logout, history }) => {     

    return (
        <div>
            <form  class="input-group mb-3" onSubmit={(event) =>{
                event.preventDefault()
                logout()
                history.push('/')
                }
            }>
                <input class="btn btn-outline-secondary" type="submit" value="Log out"/>
            </form>
        </div>
    )
}

export default withRouter(connect(null, {logout}) (Logout))