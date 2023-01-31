import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styles from '../styles/winners.module.css'
import filterStyles from '../components/filters/filters.module.css'
import {getActivatedCodes} from '../redux/actions/data'
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import WinnersTable from '../components/winners/table'
import NewFilter from '../components/filters/newFilters'

const Winners = () => {
const activatedCodes = useSelector(state=>state.data.activated)
const phoneUser = useSelector(state=> state.users.userByPhone)
const dispatch = useDispatch()
useEffect(()=>{
   !activatedCodes && dispatch(getActivatedCodes())
},[])

    return(
        <div>
            <h1>Общая таблица победителей</h1> 
            <div className={filterStyles.filterRow}>
                    <NewFilter routeToFilter={(query)=>getActivatedCodes(query)} fullname phone payed value email />
                    <ReactHTMLTableToExcel
                        id="win-table-xls-button"
                        className={filterStyles.xlsButton}
                        table="win-to-xls"
                        filename="win_data"
                        sheet="tablexls"
                        buttonText="Скачать XLS"
                    />
                </div>
                {/* {phoneUser &&  <table className='tableWide' >
                    <thead>
                        <TableHeader data={header}/>
                    </thead>
                    <tbody>
                        <TableRow data={phoneUser} bold body />
                    </tbody>
                </table>} */}
                {activatedCodes && <WinnersTable data={activatedCodes} />}
        </div>
    )
}
export default Winners