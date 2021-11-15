import React from 'react'; 
import {connect} from 'react-redux';
import Dishes from './Dish.js';

const MainContainer = (props) => {

    console.log("In mainContianer - props", props)
    
    // const wishlistsTag = wishlist.length > 0 ?
    // <h5>Your current wishlist:</h5> : null 

    // const recommendationTag = recommendation.length > 0 ?
    // <h5>Your list of recommendations:</h5> : null 

    // const reviewTag = review.length > 0 ?
    // <h5>Your list of reviews:</h5> : null

    return (
        <div className="mainContainer">
           <p>You are in the main container</p>
           <Dishes />

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dish: state.dish, 
        region: state.region
    }
}

export default connect(mapStateToProps) (MainContainer)