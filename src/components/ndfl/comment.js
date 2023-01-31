import {Table, TrHeader, TrBody, Td, TextArea} from '../../styles/styledComponents/tables'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { commentUser } from '../../redux/actions/users'


const Comment = ({data, id}) => {

  const dispatch = useDispatch()
  const [comment, setComment] = useState(data)

  const change = (e) => {
    setComment(e.target.value)
  }

  const submit = (e) => {
      if(e.code=='Enter' && e.ctrlKey){
        dispatch(commentUser(comment, id))
        e.target.style.height='1em'
      } 
  }

    return (
 <div>
    <TextArea
        onFocus={e=>e.target.style.height='8em'}
        onBlur={e=>e.target.style.height='1em'}
        onClick={e=>e.target.style.height='8em'}
        onChange={change}
        onSubmit={submit}
        onKeyPress={submit}
        >
        {comment}
    </TextArea>
 </div>
                  
           
    );
}
export default Comment