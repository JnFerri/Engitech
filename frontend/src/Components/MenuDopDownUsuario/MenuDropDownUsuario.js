import styled from "styled-components";
import Imagem from "../Imagem/Imagem.js";
import iconeUsuario from '../../Images/icone-usuario.png'
import { useEffect, useRef, useState } from "react";
import ListaDropDown from "./ListaDropDown/ListaDropDown.js";

const MenuContainer = styled.div`
display:flex;
align-items:center;
justify-content:space-around;
width:10%;
margin:5px 1rem;
background-color: rgba(185, 188, 189, 0.5);
border:0.5px solid rgba(0,0,0,0.5);
border-radius:5px;
box-shadow: 2px 2px 4px rgba(0,0,0,0.5);
cursor:pointer;
position:relative;

`


function MenuDropDownUsuario(){
    const [estaAberto, setEstaAberto] = useState(false)
    const Usuario = JSON.parse(localStorage.getItem('Usuario'))
    const dropdownRef = useRef(null);

  const handleCliqueForaFechaMenu = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setEstaAberto(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleCliqueForaFechaMenu);
    return () => {
      document.removeEventListener('mousedown', handleCliqueForaFechaMenu);
    };
  }, []);

    return(
        <MenuContainer ref={dropdownRef} onClick={() => setEstaAberto(!estaAberto)} >
                <Imagem src={iconeUsuario} alt="imagem usuario" width='15%' margin='5px 0' />
                <span style={{color:'white'}}>{Usuario.usu_nome}</span>
                {
                    estaAberto && <ListaDropDown/>
                }
        </MenuContainer>
    )
}

export default MenuDropDownUsuario
