import styled from "styled-components";
import DivLinha from "../../DivLinha/DivLinha.js";
import DivColuna from "../../DivColuna/DivColuna.js";
import Label from "../../Label/Label.js";
import InputForm from "../../InputForm/InputForm.js";
import Titulo2 from "../../Titulo2/Titulo2.js";
import SelectForm from "../../SelectForm/SelectForm.js";
import { useEffect} from "react";
import { pegarTiposUsuarios } from "../../../Services/Usuarios.js";
import Button from "../../Button/Button.js";
import { useCadastroUsuario } from "../../../Context/CadastroUsuario.js";


const FormContainer = styled.form`
    width: 100%;
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    background-color:white;
    box-shadow: 4px 4px 5px rgba(0,0,0,0.25);
    border-radius:5px;
`

function FormCadastroUsuario(){
    const {NomeForm, EmailForm, SenhaForm, TipoUsuarioForm, HandleNomeForm, HandleEmailForm, HandleSenhaForm, HandleTipoUsuarioForm, HandleCadastrarUsuario, setTipoUsuarios , TiposUsuarios} = useCadastroUsuario()


    useEffect(() => {
        async function handlePegarTipoUsuarios(){
            const resultado = await pegarTiposUsuarios()
            if(resultado.status === 200){
                setTipoUsuarios(resultado.data)
            }
        }
        handlePegarTipoUsuarios()
    },[setTipoUsuarios])

    

    return(
        <FormContainer onSubmit={HandleCadastrarUsuario}>
            <Titulo2>Cadastro de Usuario</Titulo2>
            <DivLinha  width='100%'>
                <DivColuna width='40%' >
                    <Label tamanho='medio' >Nome</Label>
                    <InputForm type='text' tamanho='medio' width='95%' value={NomeForm} onChange={HandleNomeForm}/> 
                </DivColuna>
                <DivColuna width='40%'>
                    <Label tamanho='medio' >Email</Label>
                    <InputForm type='email' tamanho='medio' width='95%' value={EmailForm} onChange={HandleEmailForm}/> 
                </DivColuna>
            </DivLinha>
            <DivLinha width='100%'>
                <DivColuna  width='40%'>
                    <Label tamanho='medio' >Tipo Usuario</Label>
                    <SelectForm tamanho='medio' width='100%' value={TipoUsuarioForm} onChange={HandleTipoUsuarioForm}>
                        <option value=''>Selecione o Tipo de Usuario</option>
                        {
                            TiposUsuarios ?
                            TiposUsuarios.map((tipo,index) => (
                                <option key={index} value={tipo.tpu_id}>{tipo.tpu_nome}</option>
                            ) )
                            :
                            null
                        }
                    </SelectForm> 
                </DivColuna>
                <DivColuna width='40%'>
                    <Label tamanho='medio' >Senha</Label>
                    <InputForm type='password' tamanho='medio' width='95%' value={SenhaForm} onChange={HandleSenhaForm}/> 
                </DivColuna>
            </DivLinha>
            <Button primario = 'true' tamanho ='medio' width='30%' >Cadastrar</Button>
        </FormContainer>
    )
}

export default FormCadastroUsuario
