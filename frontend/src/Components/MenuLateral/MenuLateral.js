import styled from "styled-components";
import ListaMenuCalculoChapas from "./ListaMenuCalculoChapas/ListaMenuCalculoChapas.js";
import { useMenuLateral } from "../../Context/MenuLateral.js";
import Button from "../Button/Button.js";
import { useUsuario } from "../../Context/Usuario.js";
import ListaMenuLateralAdmin from "./ListaMenuLateralAdmin/ListaMenuLateralAdmin.js";
import ListaMenuLateralMembro from "./ListaMenuLateralMembro/ListaMenuLateralMembro.js";
import ListaMenuLateralUsuariosCadastros from "./ListaMenuLateralUsuariosCadastros/ListaMenuLateralUsuariosCadastros.js";
import { useEffect } from "react";


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
    const {TipoOpcoesMenuLateral , HandleTipoMenu} = useMenuLateral()
    const {TipoUsuario, setTipoUsuario} = useUsuario()  


    useEffect(() => {
        const Usuarios = localStorage.getItem('Usuario')
        const Usuario = JSON.parse(Usuarios)
        setTipoUsuario(Usuario.tpu_id)
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