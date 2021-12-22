import React from 'react';
import {connect} from 'react-redux';
import {deleteDish} from '../actions/dishes.js';

const DishCard = (props) =>{

return(

    props.dish ?
    <div className ="dishcard">
        <p>{`How to prepare ${props.dish.attributes.name}`}</p>
        <p>{`ingedients: ${props.dish.attributes.ingredients}`}</p>
        <button className="btn btn-secondary" onClick={()=>props.deleteDish(props.dishes, props.dish, props.history)}>Delete this review</button>

    </div> :
    
    <p> No dish to show right now </p>
    )

}



const mapStateToProps = (state) => {

    return {
    dishes: state.dish
    }
}

export default connect(mapStateToProps, {deleteDish}) (DishCard)