import styled from "styled-components";
import ListaUsuarios from "./ListaUsuarios/ListaUsuarios.js";
import {  useTodosUsuarios } from "../../Context/TodosUsuarios.js";
import ModalAlteracaoSenha from "./ModalAlteracaoSenha/ModalAlteracaoSenha.js";
import { useTodosUsuariosMock } from "../../stories/Mocks/TodosUsuariosContext.mock.js";


const UsuariosContainer = styled.section`
display:flex;
flex-direction:column;
height:auto;
width:95%;
margin: 1rem 0;
`

function TodosUsuarios(){
    const hookTodosUsuarios = window.__STORYBOOK_ADDONS_CHANNEL__ === undefined ? useTodosUsuarios : useTodosUsuariosMock
    const {ModalAlteracaoSenhaEstaAtivo} = hookTodosUsuarios()

    return(
        
        <UsuariosContainer>
            {
                ModalAlteracaoSenhaEstaAtivo === true ?
                <ModalAlteracaoSenha/>
                :
            <ListaUsuarios/>
            }
        </UsuariosContainer>
    )
}

export default TodosUsuarios

