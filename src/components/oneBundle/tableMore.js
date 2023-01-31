import React from 'react'
import {Table, TrHeader, TrBody, Td} from '../../styles/styledComponents/tables'


const BundleMoreTable = ({data}) => {


    return(
        <Table className='tableWide' id={'oneBundleTable'}>
            <thead>
                <TrHeader>
                    <Td>Дата валидации</Td>
                    <Td>Имя Фамилия</Td>
                    <Td>Телефон</Td>
                    <Td>Статус активации</Td>
                    <Td>Погашение</Td>
                    <Td>Выигрыш</Td>
                </TrHeader>
            </thead>
            <tbody>
                {data.prizes.map((data,i)=>{
                     const newDate = new Date(data.ActivationDate)
                     const minutes = newDate.getMinutes()
                     const zeroMinutes = minutes>9? minutes : '0'+minutes
                     const date = `${newDate.getDate()}.${newDate.getMonth()+1}.${newDate.getFullYear()} / ${newDate.getHours()}:${zeroMinutes}`


                    return(
                        <TrBody style={{color: data.validated? 'black':'grey'}}>
                            <Td>{data.ActivationDate ? date : data.validated ? 'неизвестно':'N/P'}</Td>
                            <Td>{data.player ? data.player.fullname: data.validated? 'неизвестно':'N/P'}</Td>
                            <Td>{data.player ?  data.player.phone:  data.validated?  'неизвестно':'N/P'}</Td>
                            <Td>{data.validated? 'Да' : 'Нет'}</Td>
                            <Td>{data.payed? 'Да' : 'Нет'}</Td>
                            <Td>{data.value} рублей</Td> 
                        </TrBody>
                    )
                })}
            </tbody>
        </Table>
        
    )
}
export default BundleMoreTable



