import {Table, TrHeader, TrBody, Td} from '../../styles/styledComponents/tables'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ChnageNDFLpayment } from '../../redux/actions/data';
import Comment from './comment'
import Confirm from '../modal/confirm';

const NdflTable = ({data, history}) => {
  const dispatch = useDispatch();
  const [confirm, setConfirm] = useState({
    visible: false,
    id: '',
    sum: ''
  })
  const handlePay = () => {
    //server
    // console.log(id)
    dispatch(ChnageNDFLpayment(confirm.id));
    setTimeout(() => {
      setConfirm({...confirm, visible:false})
    }, 200);
  }

    return (
      <>
      <Table className="tableWide" id="ndfl-to-xls">
        <thead>
          <TrHeader>
            <Td>Имя Фамилия</Td>
            <Td>Телефон</Td>
            <Td>Почта</Td>
            <Td>Оплачено</Td>
            <Td>Кол-во актив. кодов</Td>
            <Td>Общий выигрыш</Td>
            <Td>На руки</Td>
            <Td>НДФЛ</Td>
          </TrHeader>
        </thead>
        <tbody>
          {data.map((el, i) => {
            return (
              <>
              <TrBody>
                <Td>{el.fullname}</Td>
                <Td>+{el.phone}</Td>
                <Td>{el.email}</Td>
                <Td>{el.prizes.every(prize => prize.payed) ? "Да" : "Нет"}</Td>
                <Td>{el.prizes_activated}</Td>
                <Td>{el.prize_sum} рублей</Td>
                <Td>{el.sum_ndfl}</Td>
                <Td>{el.tax_sum}</Td>
                <Td>
                  <Comment data={el.comment? el.comment : ''} id={el._id} />
                </Td>
                <Td>
                  <button onClick={() => setConfirm({...confirm, visible:true, id: el._id, sum: el.sum_ndfl})}>Оплатить</button>
                </Td>
              </TrBody>
              </>
            );
          })}
        </tbody>
      </Table>

      {confirm.visible&& <Confirm text={`Подтвердите оплату ${confirm.sum} рублей`} submit={handlePay} decline={()=>setConfirm({...confirm, visible:false})} />}
      </>
    );
}
export default NdflTable