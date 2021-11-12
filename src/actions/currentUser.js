//synchronous action creators 

export const setCurrentUser = user =>{
    return{
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () =>{
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

//asynchronous action creators
export const login = (credentials, history) =>{
    return dispatch =>{
        return fetch("http://localhost:3010/api/v1/login", {
            credentials: "include", 
            method: "POST", 
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(response => response.json())
        .then(response => {
            if (response.error){
                alert(response.error)
            }else{
                dispatch(setCurrentUser(response))
            
            }
        })
        .catch(console.log)
    }
}


export const getCurrentUser = () =>{

    return dispatch => {
        return fetch("http://localhost:3010/api/v1/get_current_user", {
            credentials: "include",
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            },
        })
        .then( response => response.json())
        .then(response =>{
            if(response.error){
                alert(response.error)
            }else{
                dispatch(setCurrentUser(response))
            }
        })
        .catch(console.log)
    }
}

export const logout = () =>{
    return dispatch =>{
     dispatch(clearCurrentUser())
     return fetch("http://localhost:3010/api/v1/logout", {
         credentials: "include",
         method: "DELETE"
         })
     }
 }