import { resetDishForm } from './newDishForm.js'


//synchronous action creators 

export const setDish = dish =>{
    return{
        type: "SET_MY_DISH",
        dish
    }
}

export const addDish = dish =>{
    return{
        type: "ADD_DISH",
        dish
    }
}

export const updateDishSuccess = dish => {
    return{
        type: "UPDATE_DISH",
        dish
    }
}

export const clearDish = () =>{
    return {
        type: "CLEAR_CURRENT_DISH"
    }
}

export const deleteDishSuccess = dish => {
    return{
        type: "DELETE_DISH",
        dish
    }
}

//asynchronous action creators
export const getDishes = () =>{
    return dispatch =>{
        return fetch("http://localhost:3010/api/v1/dishes", {
            credentials: "include", 
            method: "GET", 
            headers:{
                "content-type": "application/json"
            },
        })
        .then(response => response.json())
        .then(response => {
            if (response.error){
                alert(response.error)
            }else{
                dispatch(setDish(response.data))        
            }
        })
        .catch(console.log)
    }
}


export const createDish = (dishDetails, history) => {
    let newData;

    return dispatch => {

      const dishInfo = {
        dish: dishDetails
      }

      console.log( "you are in createDish", dishInfo)

      return fetch("http://localhost:3010/api/v1/dishes", {
        credentials: "include",  
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dishInfo)
      })
        .then(response => response.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
                newData = response.data
                dispatch(setDish(response.data));
                dispatch(resetDishForm());
                history.push(`/`)
            }
        })
        .catch(console.log)
    }
}

export const deleteDish = (dishes, dish, history) => {
    let updatedDishes; 

    const dishId = dish.id 

    return dispatch => {
        return fetch(`http://localhost:3010/api/v1/dishes/${dishId}`, {
            credentials: "include",
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then( resp => resp.json())
        .then(response =>{
            if(response.error){
                alert(response.error)
            }else{
                updatedDishes = dishes.filter( dish => dish.id === dishId ? false : true)
                dispatch(deleteDishSuccess(dishId))
                history.push(`/dishes`)
            }
        }).then(()=>{
            dispatch(setDish(updatedDishes))
        })
        .catch(console.log)
    }
}