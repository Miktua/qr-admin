import {GET_ALL_USERS, USER_BY_PHONE, GET_USERS_NDFL, COMMENT_USER} from '../types'
import {innerBackend, instance, setAuthToken} from '../../components/utils/axios'



// const ValidationCode = async (code) => {
//     const res = await axios.put(ip+`codes/win/${code}`)
//     console.log(res.data); //validation status
// }


export const getAllUsers = () => async (dispatch) => {
    try {
    const res = await innerBackend.get(`users/find/all`)

      console.log(res.data)
      dispatch({
        type: GET_ALL_USERS,
        payload: res.data,
      });
    } catch (err) {
console.log(err)      
    }
  };

  export const getUserByPhone = (phone) => async (dispatch) => {
    try {
       console.log('phone',phone)
    //   const res = await innerBackend.get("/codes/generatecodes",formData);
        const res = await innerBackend.get(`users/find/${phone}`)
      
      console.log(res.data)
      dispatch({
        type: USER_BY_PHONE,
        payload: res.data,
      });
    } catch (err) {
        alert(err.response.data.err)      

    }
  };

  export const getNdflUsers = (query) => async (dispatch) => {
    try {

        const res = await innerBackend.get(`users/find/all/ndfl${query?query:''}`)
      
      console.log(res.data)
      dispatch({
        type: GET_USERS_NDFL,
        payload: res.data,
      });
    } catch (err) {
        console.log(err.response.data)      

    }
  };


  export const commentUser = (text, id) => async (dispatch) => {
    try {
        const body = {comment: text}
        console.log(body, 'id::: ',id)
        const res = await innerBackend.put(`admin/comment/${id}`,body)
      
      dispatch({
        type: COMMENT_USER,
        payload: res.data,
      });
    } catch (err) {
        console.log(err.response)      

    }
  };

  