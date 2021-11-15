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
