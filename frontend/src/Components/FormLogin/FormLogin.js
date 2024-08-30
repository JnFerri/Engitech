import styled from "styled-components"
import Label from "../Label/Label.js"
import InputForm from "../InputForm/InputForm.js"
import Button from "../Button/Button.js"
import { useNavigate } from "react-router-dom"
import { useUsuario } from "../../Context/Usuario.js"


const FormContainer = styled.form`
display:flex;
flex-direction:column;
align-items:center;
width: ${props => props.width || '100%'};
margin: 0 5%;


`

function FormLogin(props){
    const {handleSubmit , handleEmail , handleSenha , error} = useUsuario()
    const navigate = useNavigate()
    
    return(
        <FormContainer width={props.width} onSubmit={async (e) => await handleSubmit(e,navigate)}>
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