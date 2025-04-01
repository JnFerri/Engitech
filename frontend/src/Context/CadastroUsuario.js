import {  createContext, useContext, useState } from "react";
import { criarUsuario } from "../Services/Usuarios.js";



const CadastroUsuarioContext = createContext()


/**
 * Contexto de Cadastro de Usuário
 *
 * Este contexto fornece os estados e funções necessários para gerenciar
 * o cadastro de um usuário, incluindo:
 * - Tipos de usuários disponíveis (`TiposUsuarios`)
 * - Informações do formulário (`NomeForm`, `EmailForm`, `SenhaForm`, `TipoUsuarioForm`)
 * - Handlers para atualizar cada campo (`HandleNomeForm`, `HandleEmailForm`, `HandleSenhaForm`, `HandleTipoUsuarioForm`)
 * - Função para realizar o cadastro (`HandleCadastrarUsuario`)
 * 
 * Exemplo de uso:
 * ```
 * import { useCadastroUsuario } from 'caminho/do/contexto';
 * const { NomeForm, HandleNomeForm } = useCadastroUsuario();
 * ```
 */
export const CadastroUsuarioProvider = ({children}) => {
    const [TiposUsuarios, setTipoUsuarios] = useState([])
    const [NomeForm, setNomeForm] = useState('')
    const [EmailForm, setEmailForm] = useState('')
    const [SenhaForm, setSenhaForm] = useState('')
    const [TipoUsuarioForm, setTipoUsuarioForm] = useState('')
    
    /**
     * Função define o valor do estado NomeForm conforme valor do input onde for ativada.
     * 
     * @param {*} e Evento ativador da função. 
     */
    function HandleNomeForm(e){
        setNomeForm(e.target.value)
    }

    /**
     * Função define o valor do estado EmailForm conforme valor do input onde for ativada.
     * 
     * @param {*} e Evento ativador da função. 
     */
    function HandleEmailForm(e){
        setEmailForm(e.target.value)
    }

    /**
     * Função define o valor do estado SenhaForm conforme valor do input onde for ativada.
     * 
     * @param {*} e Evento ativador da função. 
     */
    function HandleSenhaForm(e){
        setSenhaForm(e.target.value)
    }

    /**
     * Função define o valor do estado TipoUsuarioForm conforme valor do input onde for ativada.
     * 
     * @param {*} e Evento ativador da função. 
     */
    function HandleTipoUsuarioForm(e){
        setTipoUsuarioForm(e.target.value)
    }

    /**
     * Cadastra novo usuario no banco de dados conforme valores salvos nos estados (`NomeForm` , `EmailForm` , `SenhaForm` , `TipoUsuarioForm`).
     * 
     * @param {*} e Evento ativador da função; 
     */
    async function HandleCadastrarUsuario(e){
        e.preventDefault()
        const result = await criarUsuario(NomeForm,EmailForm,SenhaForm,TipoUsuarioForm)
        
        setNomeForm('')
        setEmailForm('')
        setSenhaForm('')
        setTipoUsuarioForm('')
        window.alert(`${result.data.message}`)
    }


    return (
        <CadastroUsuarioContext.Provider value={{TiposUsuarios, NomeForm, EmailForm, SenhaForm, TipoUsuarioForm, HandleNomeForm, HandleEmailForm, HandleSenhaForm, HandleTipoUsuarioForm, HandleCadastrarUsuario, setTipoUsuarios}}>
            {children}
        </CadastroUsuarioContext.Provider>
    )
}


export const useCadastroUsuario =() => {
    return useContext(CadastroUsuarioContext)
}
