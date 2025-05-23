import styled from "styled-components";


const LinhaMenuLateral  = styled.li`
    width:100%;
    background-color: ${props => props.ativado === true ? '#e5751b' : '#504d4d'};
    padding:10px 0;
    text-align:center;
    color:white;
    cursor:pointer;
    margin:1px 0;
    list-style:none;
    font-family: "Barlow Condensed", system-ui;
    font-weight: 400;
    font-style: normal;
    font-size: 22px;

    &:hover{
    background-color: #6b6a6a;
}
`



export default LinhaMenuLateral