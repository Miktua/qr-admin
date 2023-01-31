import {Table, TrHeader, TrBody, Td} from '../../styles/styledComponents/tables'
import React from 'react'


const HistoryTable = ({data, history}) => {
  

    return (
      <Table className="tableWide" id="table-to-xls">
        <thead>
          <TrHeader>
            <Td>Активация</Td>
            <Td>Имя Фамилия</Td>
            <Td>Телефон</Td>
            <Td>Почта</Td>
            <Td>Погашение</Td>
            <Td>Выигрыш</Td>
          </TrHeader>
        </thead>
        <tbody>
          {data.map((el, i) => {
            return (
              <TrBody style={{ color: el.player ? "black" : "grey" }}>
                <Td>{el.ActivationDate ? el.ActivationDate.split("T")[0] : "-"}</Td>
                <Td>
                  {el.player
                    ? el.player.fullname
                    : el.validated
                    ? "неизвестно"
                    : "N/P"}
                </Td>
                <Td>
                  {el.player
                    ? el.player.phone
                    : el.validated
                    ? "неизвестно"
                    : "N/P"}
                </Td>
                <Td>
                  {el.player
                    ? el.player.email
                    : el.validated
                    ? "неизвестно"
                    : "N/P"}
                </Td>
                <Td>{el.payed ? "Да" : el.expired? 'Истек' : "Нет"}</Td>
                <Td>{el.value} рублей</Td>
              </TrBody>
            );
          })}
        </tbody>
      </Table>
    );
}
export default HistoryTable