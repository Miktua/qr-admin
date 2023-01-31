import {Table, TrHeader, TrBody, Td, TextArea} from '../../styles/styledComponents/tables'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { commentUser } from '../../redux/actions/users'
import styles from './modal.module.css'

const Confirm = ({text, submit, decline}) => {

  

    return (
 <div className={styles.bg}>
    <div className={styles.container}>
        <div>{text}</div>
        <div className={styles.btnFlex}>
            <button className={styles.btn} onClick={submit}>Да</button>
            <button className={styles.btn} onClick={decline}>Нет</button>
        </div>
    </div>
 </div>
                  
           
    );
}
export default Confirm