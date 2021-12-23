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
        
    };

    const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg>;

    const placement = `search ... ${searchIcon}`

    return(

        <div className='mainSearch'>
            
            <div className='form' >
                <form className='form-control' onSubmit={event =>{
                    event.preventDefault()
                }}>
             
                    <textarea className= "form-control" name= "search" placeholder="Search..." onChange={handleChange} type = "text" value= {dishMatchForm.content} />
                    <br/>
                    <input class="btn btn-outline-secondary" type="submit" value= "Search"/>
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