import styled from "styled-components";
import { useUsuario } from "../../../Context/Usuario.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useMenuLateral } from "../../../Context/MenuLateral.js";


const ListaContainer = styled.ul`
    width: 100%;
    position: absolute;
    top: 100%;
    left:0;
    list-style: none;
    padding: 0;
    margin: 0;
    rigth:0;
    background-color:#e6e3e1;
    border:0.2px black solid;
`

const ListaItem = styled.li`
    border: 0.2px solid rgba(155,155,155,0.5);
    padding:2px 0;
    font-family: "Barlow Condensed", system-ui;
    font-weight: 400;
    font-style: normal;

    &&:hover{
    background-color : #949392;
    color:white;
    }
`


function ListaDropDownUsuario(){
    const {handleLogout,TipoUsuario} = useUsuario()
    const { HandleTipoMenu} = useMenuLateral()
    const navigate = useNavigate()
    
    useEffect(() => {
        console.log(TipoUsuario)
    }, [TipoUsuario])

    return(
        <ListaContainer>
        
        <ListaItem>Perfil</ListaItem>
        { TipoUsuario === 1 ?
            <ListaItem onClick={() => HandleTipoMenu('UsuariosAdmin')}>Usuarios</ListaItem>
            :null
        }
            
        <ListaItem onClick={() => handleLogout(navigate)}>Sair</ListaItem>       
        
        </ListaContainer>
    )
}

export default ListaDropDownUsuario
