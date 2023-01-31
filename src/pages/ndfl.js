import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import styles from '../styles/ndfl.module.css'
import filterStyles from '../components/filters/filters.module.css'

import Filters from '../components/filters/newFilters'
import { getNdflUsers } from '../redux/actions/users'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import NdflTable from '../components/ndfl/table'

const Ndfl = () => {
    const ndflUsers = useSelector(state=>state.users.ndfl)
    console.log('ndfl users',ndflUsers)
    const dispatch = useDispatch()
    useEffect(()=>{
       !ndflUsers && dispatch(getNdflUsers())
    },[])
    return (
      <div>
        <h1>НДФЛ</h1>
        <div className={filterStyles.filterRow}>
          <Filters routeToFilter={(query)=>getNdflUsers(query)} fullname phone payed value prize_sum/>
          <ReactHTMLTableToExcel
            id="ndfl-table-xls-button"
            className={filterStyles.xlsButton}
            table="ndfl-to-xls"
            filename="ndfl_data"
            sheet="tablexls"
            buttonText="Скачать XLS"
          />
        </div>
        {ndflUsers && <NdflTable data={ndflUsers} />}
      </div>
    );
}
export default Ndfl