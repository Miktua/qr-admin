import React, {useState, useEffect} from 'react'
import {Table, TrHeader, TrBody, Td, Select} from '../../styles/styledComponents/tables'

import axios from "axios";
import { useDispatch } from 'react-redux';
import { ChangeBundleStatus, DeleteBundle, oneBundle } from '../../redux/actions/data';
let backend = process.env.REACT_APP_IP;

const BundleTable = ({data, history}) => {
    const dispatch = useDispatch()

    const [date,setDate] = useState('')
    const [dateDownloaded,setDateDownloaded] = useState('')
    const [printDate,setPrintDate] = useState('')
    useEffect(()=>{
        if(data){
        const newDate = new Date(data.date)
        const day = newDate.getDate()
        const month = newDate.getMonth()+1
        const year = newDate.getFullYear()
        const hours = newDate.getHours()
        const minutes = newDate.getMinutes()
        const zeroMinutes = minutes>9? minutes : '0'+minutes
        setDate(day+'.'+month+'.'+year+'/'+hours+':'+zeroMinutes)
        }
    },[])
    useEffect(()=>{
        if(data && data.download_date){
        const newDate = new Date(data.download_date)
        const day = newDate.getDate()
        const month = newDate.getMonth()+1
        const year = newDate.getFullYear()
        const hours = newDate.getHours()
        const minutes = newDate.getMinutes()
        const zeroMinutes = minutes>9? minutes : '0'+minutes
        setDateDownloaded(day+'.'+month+'.'+year+' / '+hours+':'+zeroMinutes)
        }
    },[])
    useEffect(()=>{
        if(data && data.print_date){
        const newDate = new Date(data.print_date)
        const day = newDate.getDate()
        const month = newDate.getMonth()+1
        const year = newDate.getFullYear()
        const hours = newDate.getHours()
        const minutes = newDate.getMinutes()
        const zeroMinutes = minutes>9? minutes : '0'+minutes
        setPrintDate(day+'.'+month+'.'+year+' / '+hours+':'+zeroMinutes)
        }
    },[])
    const handleDownload = (e) => {
        // DownloadFile(data._id)
        e.preventDefault()
        DownloadFile(data._id)
        // dispatch(downloadBundle(data._id))
      }
    const rowClick = () => {
        // DownloadFile(id)
       history.replace(`bundle/${data._id}`)
       dispatch(oneBundle(data._id))
      }


      const handleSubmit = (e) => {
        if(e.target.value == 'delete'){
            dispatch(DeleteBundle(data._id))
        }


        if(e.target.value == 'print'){
            dispatch(ChangeBundleStatus(data._id))
        }
      }


    return(
        <Table className='tableWide'>
            <thead>
                <TrHeader>
                    <Td>Дата генерации</Td>
                    <Td>Кол-во QR</Td>
                    <Td>Сумма одного</Td>
                    <Td>Использовано</Td>
                    <Td>Скачать архив</Td>
                    <Td>Скачан</Td>
                    <Td>Отправлен на печать</Td>
                    <Td>Опции</Td>
                </TrHeader>
            </thead>
            <tbody>
                <TrBody onDoubleClick={() => rowClick(data._id)}>
                    <Td>{date}</Td>
                    <Td>{data.amount}</Td>
                    <Td>{data.value} рублей</Td>
                    <Td>{data.amount_validated}/{data.amount}</Td>
                    <Td>
                        <button onClick={(e) => handleDownload(e)} download>
                            скачать
                        </button>
                    </Td>
                    <Td>{data.download_num} раз / {dateDownloaded}</Td>
                    <Td>{printDate}</Td>
                    <Td>
                        <Select onChange={handleSubmit}>
                            <option>---</option>
                            {/* <option value="redirect">подробнее</option> */}
                            <option value="print">Отправлено на печать</option>
                            <option value="delete">удалить партию</option>
                        </Select>
                    </Td>
                </TrBody>
            </tbody>
        </Table>
        
    )
}
export default BundleTable





function DownloadFile(id) {
    const method = "GET";
    const url = backend + `bundles/download/${id}`;
    const headers = {
        'auth-token': localStorage.token
    }
    axios
      .request({
        url,
        method,
        headers,
        responseType: "blob", 
      })
      .then(({ data }) => {
        console.log(data)
        const downloadUrl = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.setAttribute("download", "file.zip"); //any other extension
        document.body.appendChild(link);
        link.click();
        link.remove();
      });
  }