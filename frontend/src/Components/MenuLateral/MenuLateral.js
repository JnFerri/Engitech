import styled from "styled-components";
import ListaMenuCalculoChapas from "./ListaMenuCalculoChapas/ListaMenuCalculoChapas.js";
import { useMenuLateral } from "../../Context/MenuLateral.js";
import Button from "../Button/Button.js";
import { useUsuario } from "../../Context/Usuario.js";
import ListaMenuLateralAdmin from "./ListaMenuLateralAdmin/ListaMenuLateralAdmin.js";
import ListaMenuLateralMembro from "./ListaMenuLateralMembro/ListaMenuLateralMembro.js";
import ListaMenuLateralUsuariosCadastros from "./ListaMenuLateralUsuariosCadastros/ListaMenuLateralUsuariosCadastros.js";
import { useEffect } from "react";
import { useMenuLateralMock } from "../../stories/Mocks/MenuLateralContext.mock.js";
import { useUsuarioMock } from "../../stories/Mocks/UsuariosContext.mock.js";


const MenuLateralContainer = styled.section`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
background-color:#383838;
width: 15%;
height:100%;
`

const MenuBox = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
height:100%;
width:100%;
`

function MenuLateral(){
    const hookMenu = window.__STORYBOOK_ADDONS_CHANNEL__ === undefined ? useMenuLateral : useMenuLateralMock
    const hookUsuario = window.__STORYBOOK_ADDONS_CHANNEL__ === undefined ? useUsuario : useUsuarioMock
    const {TipoOpcoesMenuLateral , HandleTipoMenu} = hookMenu()
    const {TipoUsuario, setTipoUsuario} = hookUsuario()  

    
    useEffect(() => {
        const Usuarios = localStorage.getItem('Usuario')
        const Usuario = JSON.parse(Usuarios)
        if(Usuario){
            setTipoUsuario(Usuario.tpu_id)
            
        }
    }, [setTipoUsuario])
    return(
        <MenuLateralContainer>
            <MenuBox>
            {
                TipoOpcoesMenuLateral === '' && TipoUsuario === 1  ?
                <ListaMenuLateralAdmin/> 
                :
                TipoOpcoesMenuLateral === '' && TipoUsuario === 2  ?
                <ListaMenuLateralMembro/>
                :
                null
            }
            {
                TipoOpcoesMenuLateral === 'CalculoChapas' ?
                    <ListaMenuCalculoChapas/>
                    :
                TipoOpcoesMenuLateral === 'UsuariosAdmin' ?
                    <ListaMenuLateralUsuariosCadastros />
                    :
                    null
                    
                }
                {
                    TipoOpcoesMenuLateral !== '' ?
                    <Button primario tamanho ='medio' width='80%' onClick={() => HandleTipoMenu('')}>Voltar</Button>
                    : 
                    null
                }
            </MenuBox>
        </MenuLateralContainer>
    )
}

export default MenuLateral