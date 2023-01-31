import React, {useState} from 'react'
import styles from './login.module.css'
import {login} from '../../redux/actions/auth'
import { useDispatch } from 'react-redux'

const Login = () => {
    const dispatch = useDispatch()

const [formData, setFormData] = useState({
    email: '',
    password: '',
})

    const onChange = (e) => {
        e.preventDefault(); 
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const onSubmit = () => {
        dispatch(login(formData))
        console.log('formdata: ',formData)
    }

    return(
        <div className={styles.container}>
            <div className={styles.loginCard}>
                <div className={styles.title}>Логин</div>
                <input 
                name='email'
                placeholder='Введите e-mail'
                onChange={(text)=>onChange(text)}
                />
                <input 
                name='password'
                placeholder='Введите пароль'
                onChange={(text)=>onChange(text)}
                />
                <button onClick={()=>onSubmit()}>Войти</button>
            </div>
        </div>
    )
}
export default Login