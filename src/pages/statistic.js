import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DailyGraph from '../components/statistic/DailyLine';
import DailyPrizes from '../components/statistic/DailyPrizes';
import { GetStatistic } from '../redux/actions/statistic';

const Statistic = () => {
    const dispatch = useDispatch();
    const stat = useSelector(state => state.statistic.statistic)
    useEffect(() => {
        if(!stat) {
        dispatch(GetStatistic());

        }
    }, [])

    if(!stat){
        return <p>loading...</p>
    }
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "70vw",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", width: "80%", justifyContent: "space-around"}}>
          <h3>Сгенерировано QR: {stat.totalCodes}</h3>
          <h3>На сумму: {stat.totalSum} Р</h3>
          <h3>Не активированые QR: {stat.totalNonValidated}</h3>
          <h3>На сумму: {stat.totalNonValidatedSum} Р</h3>
        </div>

        <h2>Активации </h2>
        <DailyGraph stat={stat.StatDaily} />
        <DailyPrizes stat={stat.StatDaily} />
      </div>
    );
}
export default Statistic