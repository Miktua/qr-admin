import React from 'react'
import {Table, TrHeader, TrBody, Td} from '../../styles/styledComponents/tables'

const WinnersTable = ({data}) => {



    return(
        <Table className='tableWide' id="win-to-xls">
            <thead>
                <TrHeader>
                    <Td>Имя Фамилия</Td>
                    <Td>Телефон</Td>
                    <Td>Почта</Td>
                    <Td>Погашение</Td>
                    <Td>Выигрыш</Td>
                </TrHeader>
            </thead>
            <tbody>
                {data.map((el,i)=>{
                    return (
                        <TrBody style={{color: el.player? 'black':'grey'}}>
                           <Td>{el.player ? el.player.fullname:'неизвестно'}</Td>
                           <Td>{el.player ?  el.player.phone:  'неизвестно'}</Td>
                           <Td>{el.player ?  el.player.email:  'неизвестно'}</Td>
                           <Td>{el.payed? 'Да' : 'Нет'}</Td>
                           <Td>{el.value} рублей</Td>
                        </TrBody>
                    )
                })}
            </tbody>
            
        </Table>
        
    )
}
export default WinnersTable



