import { resetLoginForm } from "./loginForm.js"
import { resetSignupForm } from "./signupForm.js"
import { getDishes } from "./dishes.js"
import { clearDish } from "./dishes.js"



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

export const signup = (credentials, history) => {
    return dispatch => {
        const userInfo = {
            user: credentials 
        } 
        return fetch("http://localhost:3010/api/v1/signup", {
            credentials: "include",
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then( response => response.json())
        .then(response =>{
            if(response.error){
                alert(response.error)
            }else{
                dispatch(setCurrentUser(response))
                dispatch(resetSignupForm())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}
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
                dispatch(getDishes())
                dispatch(resetLoginForm())
                history.push('/')
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
     dispatch(clearDish())
     return fetch("http://localhost:3010/api/v1/logout", {
         credentials: "include",
         method: "DELETE"
         })
     }
 }