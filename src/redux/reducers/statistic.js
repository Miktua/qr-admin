import { GET_STATISTIC } from "../types";




const initialState = {
    statistic: null,
    dya: null
}






export default function(state = initialState, action) {
    const {
        type, payload
    } = action;

    switch(type){
        case GET_STATISTIC:
            return {
                ...state,
                statistic: payload
            }
        default:
            return state;
        }

    }