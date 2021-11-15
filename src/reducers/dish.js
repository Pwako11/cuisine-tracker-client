export default (state = [], action) =>{
    switch (action.type) {
        case "SET_MY_DISH":
            return action.dish
        case "ADD_DISH":
                return state.concat(action.dish)
        case "CLEAR_DISH":
            return []
        case "UPDATE_DISH":
            console.log("in update Dish Action is ", action.dish)
            return state.map(dish => dish.id === action.dish.id? action.dish : dish)
        case "DELETE_DISH":
            return state.filter(dish => dish.id === action.dishId ? false : true)
        default:
            return state 
    }   
   }