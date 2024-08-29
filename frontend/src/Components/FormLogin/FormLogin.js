import styled from "styled-components"
import Label from "../Label/Label.js"
import InputForm from "../InputForm/InputForm.js"
import Button from "../Button/Button.js"
import { useState } from "react"
import { loginUsuario } from "../../Services/Usuarios.js"

const FormContainer = styled.form`
display:flex;
flex-direction:column;
align-items:center;
width: ${props => props.width || '100%'};
margin: 0 5%;


`




function FormLogin(props){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [error, setError] = useState('')
    
    function handleEmail(e){
    setEmail(e.target.value)
    }
    
    function handleSenha(e){
    setSenha(e.target.value)
    }

    async function handleSubmit(e){
        e.preventDefault()
        const result = await loginUsuario(email,senha)
        console.log(result)
        if(result.data.status === 200){
            console.log(result)
        }else {
            setError(result.data.message)
        }
    }
    
    return(
        <FormContainer width={props.width} onSubmit={handleSubmit}>
            <Label color="white">Email</Label>
            <InputForm type="email" onChange={handleEmail}></InputForm>
            <Label color="white">Senha</Label>
            <InputForm type="password" onChange={handleSenha}></InputForm>
            <Button primario = 'true' width='30%'>Entrar</Button>
            {
                error ? <span style={{color:'red'}}> {error} </span> : null
            }
        </FormContainer>
    )
}

export default FormLogin