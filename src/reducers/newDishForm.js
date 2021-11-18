const initialState = {
    name: "",
    ingredients: "", 
    region: {
        continent: "",
        country: "", 
        state: ""
    }
}

export default (state=initialState, Action) =>{
    switch(Action.type){
        case "UPDATE_DISH_FORM":
            return Action.formData
        case "RESET_DISH_FORM":
            return initialState
        default:
            return state
    }
}