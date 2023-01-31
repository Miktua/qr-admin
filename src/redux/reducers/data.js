
import {GET_ALL_DATA,GENERATE_QR, GET_ACTIVATED_CODES, GET_ALL_QRS, ONE_BUNDLE, CHANGE_BUNDLE_STATUS, DELETE_BUNDLE, START_GENERATE } from '../types'



const initialState = {
    data: null,
    oneBundle: null,
    msg: null,
    activated: null,
    allQRs: null,
    isStarted: false
}

export default function(state = initialState, action) {
    const {
        type, payload
    } = action;

    switch(type){
        case GET_ALL_DATA:
        case CHANGE_BUNDLE_STATUS:
        case DELETE_BUNDLE:
            return {
                ...state,
                data: payload
            }
        case ONE_BUNDLE:
            return {
                ...state,
                oneBundle: payload
            }
        case GET_ACTIVATED_CODES:
            return {
                ...state,
                activated: payload
            }
        case GET_ALL_QRS:
            return {
                ...state,
                allQRs: payload
            }
        case START_GENERATE:
            return {
                ...state,
                isStarted: true
            }
        case GENERATE_QR:
            const newData = [...state.data, payload]
            return {
                ...state,
                data: newData,
                msg: payload,
                isStarted: false
            }
        
            default: 
                return state;
    }

} 
