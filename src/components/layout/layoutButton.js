import React from 'react'
import styles from './layout.module.css'
import {NavLink} from 'react-router-dom'

const LayoutButton = ({title, path, icon}) => {



    return(
        <NavLink to={path} className={styles.button}>
            <img className={styles.btnIcon} src={icon} />
            {title}
        </NavLink>
    )
}
export default LayoutButton