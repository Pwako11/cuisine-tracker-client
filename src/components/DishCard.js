import React from 'react';
import {connect} from 'react-redux';

const DishCard = ({dish}) =>{



return(
    <div className ="dishcard">
        <p>{`How to prepare ${dish.attributes.name}`}</p>
        <p>{`ingedients: ${dish.attributes.ingredients}`}</p>

    </div>
)

}



const mapStateToProps = (state) => {

    return {
    dishes: state.dish
    }
}

export default connect(mapStateToProps) (DishCard)