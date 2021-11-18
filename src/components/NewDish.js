import React from 'react';
import { connect } from 'react-redux';
import { updateDishForm } from '../actions/newDishForm';
import { createDish } from '../actions/dishes';


const NewDishForm = ({updateDishForm, newDishFormData, history }) =>{

    const handleRegionInfoInputChange = event =>{
        const {name, value} = event.target
        const updatedFormInfo = {
            ...newDishFormData,
            region:{
                ...newDishFormData.region,
                [name]: value
            }
        }
        updateDishForm(updatedFormInfo)
    }

    const handleDishInfoInputChange = event =>{
        const {name, value} = event.target
        const updatedFormInfo = {
            ...newDishFormData,
                [name]: value
        }
        
        updateDishForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        createDish(newDishFormData, history)()
    }

    return(

        <form onSubmit={handleSubmit}>
            
            <input 
                class="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default" 
                placeholder="Continent" 
                value= {newDishFormData.region.continent} 
                name= "continent" 
                type="text" 
                onChange={handleRegionInfoInputChange} 
            />
            <br/>
            <input 
                class="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default" 
                placeholder="Country" 
                value= {newDishFormData.region.country} 
                name= "country" 
                type="text" 
                onChange={handleRegionInfoInputChange} 
            />
            <br/>
            <input 
                class="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default" 
                placeholder="State/Province" 
                value= {newDishFormData.region.state} 
                name= "state" 
                type="text" 
                onChange={handleRegionInfoInputChange} 
            />
            <br/>
            <input 
                class="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-default" 
                placeholder="Dish name" 
                value= {newDishFormData.name} 
                name= "name" 
                type="text" 
                onChange={handleDishInfoInputChange} 
            />
            <br/>
            <br/>
            <label>
            <textarea  
                class= "form-control" 
                name= "ingredients" 
                placeholder= "Enter your ingredients here" 
                onChange={handleDishInfoInputChange} 
                value= {newDishFormData.ingredients} >
            </textarea>
            </label>
            <br/>
            <input class="btn btn-outline-secondary" type="submit" value="Save"/>
        </form>    

    )
   
}


const mapStateToProps = state => {
    return {
      newDishFormData: state.newDishForm
    }
  }

export default connect(mapStateToProps, { updateDishForm, createDish } ) (NewDishForm);