import { innerBackend } from "../../components/utils/axios"
import { GET_STATISTIC } from "../types"








export const GetStatistic = () => async dispatch =>  {
    try {
        const res = await innerBackend.get("admin/stats/week");
        dispatch({
            type: GET_STATISTIC,
            payload: res.data
        })
        
    } catch (err) {
        alert('ошибка сервера, обновите страницу')
    }
}






