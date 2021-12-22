import React from 'react';
import {connect} from 'react-redux';

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