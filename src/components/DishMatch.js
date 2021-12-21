import React from 'react' ;
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {updateMatchForm} from '../actions/dishMatchForm.js'


const DishMatchForm = ({updateMatchForm, dishMatchForm, dishList}) =>{

    const searchHeading = dishList.length > 0 ? <h5>Here are items matching your Search</h5> : <h5>No search matches were found</h5>

    const dishCards = dishList.length > 0 ?  
     dishList.map(d => (<li>
         <Link key={d.id} to ={`/dishes/${d.id}`}>{d.attributes.name} </Link><br/>
     </li>))  : null
    
    const handleChange = (event) =>{
        const {name, value} = event.target
        const updatedFormInfo = {
            ...dishMatchForm,
                [name]: value
        }
        
        updateMatchForm(updatedFormInfo)
        
        console.log("Setp 3", dishMatchForm)
    }

    return(

        <div>
            <form onSubmit={event =>{
                event.preventDefault()
                console.log("You are in Search component")
                console.log(event)
            }}>
                <label>
                <textarea name= "content" placeholder="type your selection " onChange={handleChange} type = "text" value= {dishMatchForm.content}/>
                </label>
                <br/>
                <input type="submit" value= "submit"/>
            </form>

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