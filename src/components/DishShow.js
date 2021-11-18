import React from 'react';
import {connect} from 'react-redux';

const DishShow = (props) =>{

console.log("in DishShow - props", props)

return(
    <div className ="dishshow">
        {/* <p>{`How to prepare ${dish.attributes.name}`}</p>
        <p>{`ingedients: ${dish.attributes.ingredients}`}</p> */}

    </div>
)

}



const mapStateToProps = (state) => {

    return {
    dishes: state.dish
    }
}

export default connect(mapStateToProps) (DishShow)