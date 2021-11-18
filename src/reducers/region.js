export default (state = null, action) =>{
    switch (action.type) {
        case "SET_CURRENT_REGION":
            return action.region
        case "CLEAR_CURRENT_REGION":
            return null
        default:
            return state 
    }   
}