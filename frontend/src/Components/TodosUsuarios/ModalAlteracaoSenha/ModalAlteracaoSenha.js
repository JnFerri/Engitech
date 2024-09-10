import styled from "styled-components";
import Overlay from "../../Overlay/Overlay.js";
import Button from "../../Button/Button.js";
import { useTodosUsuarios } from "../../../Context/TodosUsuarios.js";
import DivLinha from "../../DivLinha/DivLinha.js";
import DivColuna from "../../DivColuna/DivColuna.js";
import Label from "../../Label/Label.js";
import InputForm from "../../InputForm/InputForm.js";
import Titulo3 from "../../Titulo3/Titulo3.js";
import PaginaSucesso from "../../PaginaSucesso/PaginaSucesso.js";
import Span from "../../Span/Span.js";

const ModalAlteracaoSenhaContainer = styled.section`
position: absolut;
width:50%;
height:auto;
margin:15vh 25%;
border:0.5px black solid;
border-radius:10px;
z-index: 1001;
overflow:auto;
background-color:white;
display:flex;
align-items:center;
justify-content:space-between;
flex-direction:column;
`


const ModalForm = styled.form`
display:flex;
flex-direction:column;
width:80%;
align-items:center;
justify-content:space-between;
margin:0.5rem 0.5rem;
`

function ModalAlteracaoSenha(){
    const {FecharModalAlteracaoSenha, HandleNovaSenhaFormModal, HandleConfirmaNovaSenhaFormModal, NovaSenhaFormModal, ConfirmaNovaSenhaFormModal, AlterarSenhaUsuario, PaginaSucessoAlteracaoSenhaEstaAtiva, DadosUsuarioModalAlteracaoSenha} = useTodosUsuarios()

    return(
        <Overlay>
        <ModalAlteracaoSenhaContainer>
            <DivLinha width='100%' alignItems='left' justifyContent='left'>
            <Button secundario tamanho='medio' width='20%' margin='0.5rem 0.5rem' onClick={FecharModalAlteracaoSenha}>Fechar</Button>
            </DivLinha>
                    <DivLinha width='80%'>
                        <DivColuna>
                        <Label tamanho ='pequeno'>Usuario :</Label>
                        <Span textAlign='left'>{DadosUsuarioModalAlteracaoSenha.usu_nome}</Span>
                        </DivColuna>
                        <DivColuna>
                        <Label tamanho='pequeno'>Email :</Label>
                        <Span textAlign='left'>{DadosUsuarioModalAlteracaoSenha.usu_email}</Span>
                        </DivColuna>
                        <DivColuna>
                        <Label tamanho='pequeno'>Tipo de Usuário :</Label>
                        <Span textAlign='left'>{DadosUsuarioModalAlteracaoSenha.tpu_nome}</Span>
                        </DivColuna>
                    </DivLinha>
            <DivLinha width='80%'>
            <Titulo3 color="#f58634">Alteração de Senha</Titulo3>
            </DivLinha>
            {
                PaginaSucessoAlteracaoSenhaEstaAtiva ? 
                    <PaginaSucesso atualizacao mensagemSucesso='Senha Atualizada Com Sucesso...' />
                :
                <ModalForm width='100%' onSubmit={(e) => AlterarSenhaUsuario(DadosUsuarioModalAlteracaoSenha.usu_id , e)} >
                    <DivLinha>
                    <DivColuna>
                        <Label tamanho='pequeno'>Nova Senha</Label>
                        <InputForm type="password" tamanho='medio' width='90%' required onChange={HandleNovaSenhaFormModal} value={NovaSenhaFormModal}></InputForm>
                    </DivColuna>
                    <DivColuna>
                        <Label tamanho='pequeno'>Confirme a Nova Senha</Label>
                        <InputForm type="password" tamanho='medio' width='90%' required onChange={HandleConfirmaNovaSenhaFormModal} value={ConfirmaNovaSenhaFormModal}></InputForm>
                    </DivColuna>
                    </DivLinha>
                    <Button primario tamanho='medio' width='50%' type="submit" >Alterar Senha</Button>
                </ModalForm>
            }
        </ModalAlteracaoSenhaContainer>
        </Overlay>
    )
}

export default ModalAlteracaoSenha
        
           