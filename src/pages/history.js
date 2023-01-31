import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'

import styles from '../styles/history.module.css'
import filterStyles from '../components/filters/filters.module.css'

import Filters from '../components/filters/newFilters'
import { getAllQRs } from '../redux/actions/data'
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import HistoryTable from '../components/history/table'

const History = () => {
    const allQRs = useSelector(state=>state.data.allQRs)
    console.log('qrs all ',allQRs)
    const dispatch = useDispatch()
    useEffect(()=>{
       !allQRs && dispatch(getAllQRs())
    },[])
    return (
      <div>
        <h1>История</h1>
        <div className={filterStyles.filterRow}>
          <Filters routeToFilter={(query)=>getAllQRs(query)} fullname phone validated payed value/>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className={filterStyles.xlsButton}
            table="table-to-xls"
            filename="tablexls"
            sheet="tablexls"
            buttonText="Скачать XLS"
          />
        </div>
        {allQRs ? <HistoryTable data={allQRs}  /> : <p>Загружаем данные...</p>}
      </div>
    );
}
export default History