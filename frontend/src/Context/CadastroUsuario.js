import {  createContext, useContext, useState } from "react";
import { criarUsuario } from "../Services/Usuarios.js";


const CadastroUsuarioContext = createContext()


export const CadastroUsuarioProvider = ({children}) => {
    const [TiposUsuarios, setTipoUsuarios] = useState([])
    const [NomeForm, setNomeForm] = useState('')
    const [EmailForm, setEmailForm] = useState('')
    const [SenhaForm, setSenhaForm] = useState('')
    const [TipoUsuarioForm, setTipoUsuarioForm] = useState('')
    
    
    function HandleNomeForm(e){
        setNomeForm(e.target.value)
    }

    function HandleEmailForm(e){
        setEmailForm(e.target.value)
    }

    function HandleSenhaForm(e){
        setSenhaForm(e.target.value)
    }

    function HandleTipoUsuarioForm(e){
        setTipoUsuarioForm(e.target.value)
    }

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
