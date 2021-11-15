import React from 'react';
import {connect} from 'react-redux';
import DishCard from './DishCard';

const Dishes = ({dishes}) => {
    console.log ("In dishes - dishes", dishes)

    const dishCards = dishes.length > 0 ?  
     dishes.map(d =>(<li>{d.attributes.name} <DishCard dish={d} key={d.id}/><br/></li>)) : null

    return(
        <div>
            {dishCards}

        </div>
    )
}

const mapStateToProps = state => {

    return {
        dishes: state.dish
    }
}

export default connect(mapStateToProps) (Dishes)