import React, { useEffect, useState } from 'react'
import styles from './filters.module.css'
import {useDispatch} from 'react-redux'
import { Input, Select} from '../../styles/styledComponents/filters'


const NewFilter = ({routeToFilter, fullname, phone, validated, payed, printed, value, prize_sum, email}) => {

    const dispatch = useDispatch()

    const[filters, setFilters] = useState({
        fullname: '',
        phone: '',
        email:'',
        validated: '',
        payed: '',
        printed: '',
        value: '',
        gt: '',  //prize_sum
    })

    useEffect(()=>{
        onSubmit()
    },[filters.validated, filters.payed, filters.printed])


    const onSubmit = (e) => {
        e && e.preventDefault()
        const newArr =   [
                filters.fullname.length>0&&'fullname='+filters.fullname, 
                filters.phone.length>0&&'phone='+filters.phone,
                filters.email.length>0&&'email='+filters.email,
                filters.validated.length>0&&'validated='+filters.validated,
                filters.payed.length>0&&'payed='+filters.payed,
                filters.printed.length>0&&'printed='+filters.printed,
                filters.value.length>0&&'value='+filters.value,
                filters.gt.length>0&&'gt='+filters.gt,
            ] 
        const queryArr = newArr.length>0 ? newArr.filter(el=>el!==false) : undefined
        const query = queryArr ? ( queryArr.length>1? '?'+queryArr.join('&') : queryArr.length==1? '?'+queryArr[0] : queryArr.length==0 && undefined)  : undefined

        dispatch(routeToFilter(query))
    }

    const inputFilterHandler = (e) => {
        setFilters({...filters, [e.target.name]: e.target.value})
        }

        return(
            <div className={styles.filterContainer}>
                {fullname && 
                <div className={styles.filterButton} >
                    <img className={styles.filterIcon} src='/search.png'/>
                    <form onSubmit={e=>onSubmit(e)}>
                    <Input 
                        name='fullname'
                        type='search'
                        placeholder='Имя Фамилия'
                        onChange={e=>inputFilterHandler(e)}
                        />  
                    </form>
                </div>}
                {phone && 
                <div className={styles.filterButton} >
                    <img className={styles.filterIcon} src='/search.png'/>
                    <form onSubmit={e=>onSubmit(e)}>
                    <Input 
                        name='phone'
                        type='search'
                        placeholder='Телефон'
                        onChange={e=>inputFilterHandler(e)}
                        />  
                    </form>
                </div>}
                {email && 
                <div className={styles.filterButton} >
                    <img className={styles.filterIcon} src='/search.png'/>
                    <form onSubmit={e=>onSubmit(e)}>
                    <Input 
                        name='email'
                        type='search'
                        placeholder='E-mail'
                        onChange={e=>inputFilterHandler(e)}
                        />  
                    </form>
                </div>}
                {validated && 
                <div className={styles.filterButton} >
                    <img className={styles.filterIcon} src='/search.png'/>
                    <form onSubmit={e=>onSubmit(e)}>
                    <Select name='validated' onChange={e=>inputFilterHandler(e)}>
                        <option value="">Статус активации</option>
                        <option value="true">Активирован</option>
                        <option value="false">Не активирован</option>
                    </Select>
                    </form>
                </div>}
                {payed && 
                <div className={styles.filterButton} >
                    <img className={styles.filterIcon} src='/search.png'/>
                    <form onSubmit={e=>onSubmit(e)}>
                    <Select name='payed' onChange={e=>inputFilterHandler(e)}>
                        <option value="">Погашение</option>
                        <option value="true">Погашен</option>
                        <option value="false">Не погашен</option>
                    </Select>
                    </form>
                </div>}
                {printed && 
                <div className={styles.filterButton} >
                    <img className={styles.filterIcon} src='/search.png'/>
                    <form onSubmit={e=>onSubmit(e)}>
                    <Select name='printed' onChange={e=>inputFilterHandler(e)}>
                        <option value="">Печать</option>
                        <option value="true">В печати</option>
                        <option value="false">Не в печати</option>
                    </Select>
                    </form>
                </div>}
                {value && 
                <div className={styles.filterButton} >
                    <img className={styles.filterIcon} src='/search.png'/>
                    <form onSubmit={e=>onSubmit(e)}>
                    <Input 
                        name='value'
                        type='search'
                        placeholder='Выигрыш'
                        onChange={e=>inputFilterHandler(e)}
                        />  
                    </form>
                </div>}
                {prize_sum && 
                <div className={styles.filterButton}  >
                    <img className={styles.filterIcon} src='/search.png'/>
                    <form onSubmit={e=>onSubmit(e)}>
                    <Input 
                        name='gt'
                        type='search'
                        placeholder='Суммарный выигрыш более'
                        onChange={e=>inputFilterHandler(e)}
                        />  
                    </form>
                </div>}
                <span/>
            </div>
        )
   
  
}
export default NewFilter