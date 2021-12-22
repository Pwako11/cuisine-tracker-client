import React from 'react' ;
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateMatchForm} from '../actions/dishMatchForm.js'


const DishMatchForm = ({updateMatchForm, dishMatchForm, dishList}) =>{

    let searchValue = dishMatchForm.content.trim().toLowerCase();

    const filteredDishes = dishList.filter(dish =>{
        
        return dish.attributes.name.toLowerCase().includes(searchValue)
    });


    const searchHeading = filteredDishes.length > 0 ? <h5>Here are items matching your Search</h5> : <h5>No search matches were found</h5>

    const dishCards = filteredDishes.length > 0 ?  
     filteredDishes.map(d => (<li>
         <Link key={d.id} to ={`/dishes/${d.id}`}>{d.attributes.name} </Link><br/>
     </li>))  : null
    
    const handleChange = (event) =>{
        const {name, value} = event.target
        const updatedFormInfo = {
            ...dishMatchForm,
                [name]: value
        }
        updateMatchForm(updatedFormInfo)
        
    }

    return(

        <div className='mainSearch'>
            
            <div className='form' >
                <form className='form-control' onSubmit={event =>{
                    event.preventDefault()
                }}>
                    <label>
                    <textarea name= "content" placeholder="type your selection " onChange={handleChange} type = "text" value= {dishMatchForm.content}/>
                    </label>
                    <br/>
                    <input class="btn btn-outline-secondary" type="submit" value= "search"/>
                </form>

            </div>
            
            <div className='searchResults'>
                {searchHeading }
                
                <ol>
                    {dishCards}
                </ol>
            </div>

        </div> 

    ) 

}

const mapStateToProps = state =>{

    console.log("state", state)

    return {
        dishList: state.dish,
         dishMatchForm: state.dishMatchForm
     }
}

export default connect(mapStateToProps, {updateMatchForm}) (DishMatchForm);