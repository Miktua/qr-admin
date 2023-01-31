import React from 'react'
import styles from './layout.module.css'
import {NavLink} from 'react-router-dom'
import LayoutButton from './layoutButton'

const Layout = ({history}) => {

    const exit = () => {
        localStorage.removeItem('token')
        // history.replace('/auth')
        // window.location.reload();
    }

    return(
        <div className={styles.headerContainer}>
            {/* <img src='/qr-code-outline.png' className={styles.mainIcon} /> */}
            <div>

            </div>
            <NavLink to='/auth' onClick={()=>exit()} className={styles.exit}>Выйти</NavLink>
        </div>
    )
}
export default Layout