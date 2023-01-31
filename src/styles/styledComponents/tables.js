import styled from 'styled-components'

export const Table = styled.table`

margin: 0;
margin-top: 40px;
margin-bottom: 40px;
border: none;
width: 100%;
border-collapse: collapse
`

export const TrHeader = styled.tr`

border: none;
height: 40px;
font-weight: bold;
color: grey;
`
export const TrBody = styled.tr`

border: none;
// height: 80px;

&:hover{
    background-color: #F0F0F0;
}
& button{
    background-color: transparent;
    color: #5D96D8;
    padding: 0;
    // margin-top: 10px;
    // margin-bottom:auto;
    align-self: center;
    border: none;
    }
    & button:hover{
    background-color: transparent;
    color: black;
    text-decoration: underline;
    border: none;
    }
`
export const TrFooter = styled.tr`

border: none;
height: 40px;
font-size: 20px;
font-weight: bold;
border-top: 1px solid black;

`

export const Td = styled.td`

border: none;
font-size:14px;
padding: 10px 0;

`
export const TextArea = styled.textarea`
height: 1em;
resize: none;

`

export const Select = styled.select`

border: none;

`