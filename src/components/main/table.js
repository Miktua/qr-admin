import {Table, TrHeader, TrBody, Td, TrFooter, Select} from '../../styles/styledComponents/tables'
import React, {useState} from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux';
import { ChangeBundleStatus, DeleteBundle, downloadBundle, oneBundle } from '../../redux/actions/data';
import Confirm from '../modal/confirm';
let backend = process.env.REACT_APP_IP;

const MainTable = ({data, history}) => {
    const dispatch = useDispatch()
    const [confirm, setConfirm] = useState({
        visible: false,
        id:'',
        amount: '',
        value: '',
      })

    const footer = data && {
        date: 'Итого',
        amount: data.reduce((sum,cur)=>{
            return sum+cur.amount
        },0),
        value: data.reduce((sum,cur)=>{
            return sum+(cur.value*cur.amount)
        },0),
        used: data.reduce((sum,cur)=>{
            return sum+cur.amount_validated
        },0),
    }


    const handleDownload = (e, id) => {
        e.preventDefault()
        DownloadFile(id)
      }
    const rowClick = (id) => {
       history.replace(`bundle/${id}`)
       dispatch(oneBundle(id))
      }


    const handleSubmit = (e, id, amount, value) => {
        if(e.target.value == 'delete'){
            dispatch(DeleteBundle(id))
        }


        if(e.target.value == 'print'){
            setConfirm({...confirm, visible:true, id: id, amount:amount, value:value})
        }

        if(e.target.value == 'redirect'){
            history.push(`bundle/${id}`);

        }
      }

      const toPrint = (id) => {
        dispatch(ChangeBundleStatus(id))
        setTimeout(() => {
            setConfirm({...confirm, visible:false})
        }, 200);
      }

    return(
        <>
        <Table className='tableWide'>
            <thead>
                <TrHeader>
                    <Td>Дата генерации</Td>
                    <Td>Кол-во QR</Td>
                    <Td>Сумма одного</Td>
                    <Td>Использовано</Td>
                    <Td>Скачать архив</Td>
                    <Td>Скачан</Td>
                    <Td>Печать</Td>
                </TrHeader>
            </thead>
            <tbody>
                {data.map((el,i)=>{

                    const newDate = new Date(el.date)
                    const newDownDate = new Date(el.download_date)

                    const minutes = newDate.getMinutes()
                    const zeroMinutes = minutes>9? minutes : '0'+minutes
                    const date = `${newDate.getDate()}.${newDate.getMonth()+1}.${newDate.getFullYear()} / ${newDate.getHours()}:${zeroMinutes}`

                    let dateDownloaded = ''
                    if(el.download_date){
                    const minutesDownload = newDownDate.getMinutes()
                    const zeroDownMinutes = minutesDownload>9? minutesDownload : '0'+minutesDownload
                    dateDownloaded = `${newDownDate.getDate()}.${newDownDate.getMonth()+1}.${newDownDate.getFullYear()} / ${newDownDate.getHours()}:${zeroDownMinutes}`}
                    return (
                        <TrBody  onDoubleClick={() => rowClick(el._id)}>
                            <Td>{date}</Td>
                            <Td>{el.amount}</Td>
                            <Td>{el.value} рублей</Td>
                            <Td>{el.amount_validated}/{el.amount}</Td>
                            <Td>
                                <button  onClick={(e) => handleDownload(e, el._id)} download>
                                    скачать
                                </button>
                            </Td>
                            <Td>{el.download_num} раз / {dateDownloaded}</Td>
                            <Td>{el.printed ? 'Отправлен' : 'Не отправлен'}</Td>
                            <Td>
                                <Select onChange={(e)=>handleSubmit(e, el._id, el.amount, el.value)}>
                                    <option>опции</option>
                                    <option value="redirect">Подробнее</option>
                                    <option disabled={el.printed? true : false} value="print">Отправлено на печать</option>
                                    <option disabled={el.printed? true : false} value="delete">Удалить партию</option>
                                </Select>
                            </Td>
                        </TrBody>
                    )
                })}
            </tbody>
            <tfoot>
                <TrFooter>
                    <Td>{footer.date}</Td>
                    <Td>{footer.amount}</Td>
                    <Td>{footer.value} рублей</Td>
                    <Td>{footer.used}/{footer.amount}</Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                    <Td></Td>
                </TrFooter>
            </tfoot>
        </Table>


        {confirm.visible && <Confirm 
            text={`Подтвердите отправку на печать партии ${confirm.amount}шт по ${confirm.value}руб`} 
            submit={()=>toPrint(confirm.id)} 
            decline={()=>setConfirm({...confirm, visible:false})}
            />}
        </>
    )
}
export default MainTable





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