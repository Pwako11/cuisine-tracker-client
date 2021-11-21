import React from 'react' ;
import {connect} from 'react-redux';
import {updateMatchForm} from '../actions/dishMatchForm.js'


const DishMatchForm = ({updateMatchForm, dishMatchForm}) =>{


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

        </div> 
    ) 

}

const mapStateToProps = state =>{

    return {
         dishMatchForm: state.dishMatchForm
     }
}

export default connect(mapStateToProps, {updateMatchForm}) (DishMatchForm);