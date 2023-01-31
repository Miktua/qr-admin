import {LOGIN, TEST} from '../types'
import {innerBackend, instance, setAuthToken} from '../../components/utils/axios'
import axios from "axios";
const ip = process.env.REACT_APP_IP



// LOAD USER 
export const testHandler = (num) => async dispatch => {

  console.log(num)

  try {

        dispatch({
          type: TEST,
          payload: num,
        });

     }

   catch (err) {

  }
}

export const login = (formdata) => async (dispatch) => {
  try {
  const res = await axios.post(ip+`admin/auth`, formdata)

    console.log(res.data)
    dispatch({
      type: LOGIN,
      payload: res.data,
    });

    setAuthToken(res.data.token);
    innerBackend(res.data.token);

  } catch (err) {

    console.log(err)    
    alert(err.response.data.errors[0].err)
    console.log(err.response.data)      

  }
};
   
 