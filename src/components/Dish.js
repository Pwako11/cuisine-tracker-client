import React from 'react';
import {connect} from 'react-redux';
import DishCard from './DishCard';
import {Link} from 'react-router-dom';

const Dishes = ({dishes, history}) => {

    let path;

    if (typeof history === 'undefined'){
        path = ""
    }else{
        path = history.location.pathname
    };


    const dishHeading = path ==="/dishes" ? <h5>Here is your cuisine list. Select a dish for more options
    </h5> : "" ;
    
    const dishCards = dishes.length > 0 ?  
     dishes.map(d => (<li>
         <Link key={d.id} to ={`/dishes/${d.id}`}>{d.attributes.name} </Link><br/>
     </li>))  : null

    return(
        <div className="dishlist">
            {dishHeading}
            <ol>

                {dishCards}
            </ol>
        </div>
    )
}

const mapStateToProps = state => {

    return {
        dishes: state.dish
    }
}

export default connect(mapStateToProps) (Dishes)