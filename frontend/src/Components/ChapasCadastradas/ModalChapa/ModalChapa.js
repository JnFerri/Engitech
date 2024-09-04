import styled from "styled-components";
import Overlay from "../../Overlay/Overlay.js";
import Button from "../../Button/Button.js";
import { useChapasCadastradas } from "../../../Context/ChapasCadastradas.js";
import DivLinha from "../../DivLinha/DivLinha.js";
import DivColuna from "../../DivColuna/DivColuna.js";
import Label from "../../Label/Label.js";
import InputForm from "../../InputForm/InputForm.js";
import SelectForm from "../../SelectForm/SelectForm.js";
import {useEffect} from 'react'
import { pegarTodosMateriais } from "../../../Services/Materiais.js";
import Titulo3 from "../../Titulo3/Titulo3.js";
import PaginaSucesso from "../../PaginaSucesso/PaginaSucesso.js";

const ModalChapaContainer = styled.section`
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

const ModalContainer = styled.section`
display:flex;
align-items:center;
justify-content:space-between;
width:100%;
height:100%;
`


const ModalForm = styled.form`
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:top;
margin:0.5rem 0.5rem;
`

function ModalChapa({cadastro, atualizacao}){
    const {FecharModalCadastroChapa, HandleCodigoChapaFormModal, HandleDescricaoChapaFormModal, HandleComprimentoChapaFormModal, HandleAlturaChapaFormModal, HandleEspessuraChapaFormModal, HandleMaterialChapaFormModal, CadastrarChapa , CodigoChapaFormModal, DescricaoChapaFormModal, ComprimentoChapaFormModal, AlturaChapaFormModal, EspessuraChapaFormModal, MaterialChapaFormModal , OpcoesMateriais , setOpcoesMateriais , PaginaSucessoEstaAtiva , HandleFecharPaginaSucesso , HandleAtualizarChapa } = useChapasCadastradas()


    useEffect(() => {
        async function pegarMateriais(){
        const dadosMateriais = await pegarTodosMateriais()
        if(dadosMateriais.status === 200){
            setOpcoesMateriais(dadosMateriais.data)
        }
        }
    pegarMateriais()
    }, [setOpcoesMateriais , MaterialChapaFormModal])

   

    return(
        <Overlay>
        <ModalChapaContainer>
            <DivLinha width='100%'>
            <Button primario tamanho='pequeno' width='20%' margin='0.5rem 0.5rem' onClick={FecharModalCadastroChapa}>Fechar</Button>
            </DivLinha>
            <DivLinha width='100%'>
            <Titulo3 color="#f58634">{cadastro ? 'Cadastro de Chapa' : 'Atualização de Chapa'}</Titulo3>
            </DivLinha>
            {
                PaginaSucessoEstaAtiva ? 
                    cadastro ?
                    <PaginaSucesso cadastro handleRetornar = {HandleFecharPaginaSucesso} mensagemSucesso='Chapa cadastrada com sucesso!' />
                    :
                    atualizacao ?
                    <PaginaSucesso atualizacao mensagemSucesso='Chapa atualizada com sucesso!' />
                    :
                    window.alert('Componente pagina de sucesso esta sem tipo definido, informe o administrador do sistema!!')
                    
                :  

            <ModalContainer>
            <ModalForm 
            onSubmit=
            {cadastro 
            ? 
            CadastrarChapa 
            : 
            atualizacao 
            ? 
            HandleAtualizarChapa 
            : 
            window.alert('Componente modal deve conter um tipo de cadastro ou de atualização')} >

            <DivLinha >
                <DivColuna width='25%' margin='0 0.5rem'>
                    <Label tamanho='pequeno'>Código da Chapa</Label>
                    <InputForm type="number" tamanho='medio' width='85%' required onChange={HandleCodigoChapaFormModal} value={CodigoChapaFormModal}></InputForm>
                </DivColuna>
                <DivColuna width='70%' margin='0 0.5rem'>
                    <Label tamanho='pequeno'>Material</Label>
                    <SelectForm tamanho='medio' width='100%' required onChange={HandleMaterialChapaFormModal} value={MaterialChapaFormModal}>
                        <option selected value=''>Selecione o Material</option>
                        {
                            OpcoesMateriais.map(dado => {
                                return <option value={dado.mat_id}>{dado.mat_nome}</option>
                            })
                        }
                    </SelectForm>
                </DivColuna>
            </DivLinha>
                <DivLinha>
                <DivColuna width='100%' margin='0 0.5rem'>
                    <Label tamanho='pequeno'>Descrição</Label>
                    <InputForm type="text" tamanho='medio' width='92%' required onChange={HandleDescricaoChapaFormModal} value={DescricaoChapaFormModal}></InputForm>
                </DivColuna>

                </DivLinha>

            <DivLinha >
                <DivColuna width='33%' margin='0 0.5rem'>
                    <Label tamanho='pequeno'>Altura</Label>
                    <InputForm type="number" tamanho='medio' width='85%' step='0.01' required onChange={HandleAlturaChapaFormModal} value={AlturaChapaFormModal} placeholder="Altura em milimetros"></InputForm>
                </DivColuna>

                <DivColuna width='33%' margin='0 0.5rem'>
                    <Label tamanho='pequeno'>Comprimento</Label>
                    <InputForm type="number" tamanho='medio' width='85%' step='0.01' required onChange={HandleComprimentoChapaFormModal} value={ComprimentoChapaFormModal} placeholder="Comprimento em milimetros"></InputForm>
                </DivColuna>
                
                <DivColuna width='33%' margin='0 0.5rem'>
                    <Label tamanho='pequeno'>Espessura</Label>
                    <InputForm type="number" tamanho='medio' width='85%' step='0.01' required onChange={HandleEspessuraChapaFormModal} value={ EspessuraChapaFormModal} placeholder="Espessura em milimetros"></InputForm>
                </DivColuna>
            </DivLinha>
            <Button secundario tamanho='medio' width='40%'>Salvar</Button>
            
            </ModalForm>
            </ModalContainer>
            }

        </ModalChapaContainer>
        </Overlay>
    )
}

export default ModalChapa