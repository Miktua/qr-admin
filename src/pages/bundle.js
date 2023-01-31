import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import styles from '../styles/bundle.module.css'
import filterStyles from '../components/filters/filters.module.css'
import {oneBundle} from '../redux/actions/data'
import BundleTable from '../components/oneBundle/tableBundle';
import BundleMoreTable from '../components/oneBundle/tableMore';
import Filters from '../components/filters/newFilters'
const Bundle = ({match, history}) => {
const dispatch = useDispatch()

const data = useSelector(state => state.data.oneBundle)
!data && dispatch(oneBundle(match.params.id))


    return(
        <div>
            <h1 className={styles.bundleTitle}>Подробнее о партии</h1>
            {data && <BundleTable data={data} history={history} />}

            <div className={filterStyles.filterRow}>
                <Filters routeToFilter={(query)=>oneBundle(match.params.id,query)} fullname phone validated payed value />
                <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className={filterStyles.xlsButton}
                    table="oneBundleTable"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Скачать XLS"
                />
            </div>

            {data && <BundleMoreTable data={data} history={history} />}
        </div>
    )
}
export default Bundle


