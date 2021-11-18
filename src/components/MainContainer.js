import React from 'react';
import {connect} from 'react-redux';
import Dishes from './Dish.js';

const MainContainer = ({dish, region}) => {

    return (
        <div className="mainContainer">

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dish: state.dish, 
        region: state.region,  
    }
}

export default connect(mapStateToProps) (MainContainer);