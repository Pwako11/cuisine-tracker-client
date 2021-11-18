const initialState = {
    name: "",
    ingredients: "", 
    region: {
        continent: "",
        country: "", 
        state: ""
    }
}

export default (state=initialState, action) =>{
    switch(action.type){
        case "UPDATE_DISH_FORM":
            return action.formData
        case "RESET_DISH_FORM":
            return initialState
        default:
            return state
    }
}