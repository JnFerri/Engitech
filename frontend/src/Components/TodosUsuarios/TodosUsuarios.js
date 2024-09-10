import styled from "styled-components";
import ListaUsuarios from "./ListaUsuarios/ListaUsuarios.js";
import {  useTodosUsuarios } from "../../Context/TodosUsuarios.js";
import ModalAlteracaoSenha from "./ModalAlteracaoSenha/ModalAlteracaoSenha.js";
import { useEffect } from "react";


const UsuariosContainer = styled.section`
display:flex;
flex-direction:column;
height:auto;
width:95%;
margin: 1rem 0;
`

function TodosUsuarios(){
    const {ModalAlteracaoSenhaEstaAtivo} = useTodosUsuarios()

    useEffect(() => {
        console.log(ModalAlteracaoSenhaEstaAtivo)
    }, [ModalAlteracaoSenhaEstaAtivo])
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

