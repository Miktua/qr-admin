
import {GET_ALL_USERS, USER_BY_PHONE, GET_USERS_NDFL, CHANGE_NDFL_STATUS, COMMENT_USER } from '../types'



const initialState = {
    users: null,
    ndfl: null,
    userByPhone: null,
}

export default function(state = initialState, action) {
    const {
        type, payload
    } = action;

    switch(type){
        case GET_ALL_USERS:
            return {
                ...state,
                users: payload
            }
        case USER_BY_PHONE:
            return {
                ...state,
                userByPhone: payload
            }
        case GET_USERS_NDFL:
        case COMMENT_USER:
        case CHANGE_NDFL_STATUS:
            return {
                ...state,
                ndfl: payload,
            }
            default: 
                return state;
    }

} 
