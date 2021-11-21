const initialState = {
    content: ""
}

export default (state=initialState, action) =>{
    switch(action.type){
        case "UPDATE_MATCH_FORM":
            console.log("step 2", action.formData)
            return action.formData
        case "RESET_MATCH_FORM":
            return initialState
        default:
            return state
    }
}