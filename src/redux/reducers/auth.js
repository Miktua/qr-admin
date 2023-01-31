
import {TEST, LOGIN, GET_ALL_DATA } from '../types'
import { createBrowserHistory } from "history";



const initialState = {
    token: 0,
    isAuth: false
}

export default function(state = initialState, action) {
    const {
        type, payload
    } = action;

    switch(type){
        case TEST:
         console.log(payload)
            return {
                ...state,
                // test: payload
            }
        case GET_ALL_DATA:
            return {
                ...state,
                isAuth: true
            }
        case LOGIN:
             localStorage.setItem('token', payload.token);
             const history = createBrowserHistory()
             history.replace('./')
             history.go()
             
            //  window.location.reload()
            //  console.log(localStorage.token, 'NEW TOKEN ')
            return {
                ...state,
                // loaded: true,
                token: true,
                isAuth: true,
                // error: payload.err,
            
            }
            
            default: 
                return state;
    }

} 
