import styled from "styled-components";
import Overlay from "../../Overlay/Overlay.js";
import Button from "../../Button/Button.js";
import { useChapasCadastradas } from "../../../Context/ChapasCadastradas.js";
import DivLinha from "../../DivLinha/DivLinha.js";
import DivColuna from "../../DivColuna/DivColuna.js";
import Label from "../../Label/Label.js";
import InputForm from "../../InputForm/InputForm.js";
import Imagem from "../../Imagem/Imagem.js";
import imagemTeste from '../../../Images/Medidas_chapas.png'
import SelectForm from "../../SelectForm/SelectForm.js";


const ModalCadastroDeChapaContainer = styled.section`
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

function ModalCadastroDeChapa(){
    const {FecharModalCadastroChapa} = useChapasCadastradas()

    return(
        <Overlay>
        <ModalCadastroDeChapaContainer>
            <DivLinha width='100%'>
            <Button primario tamanho='pequeno' width='20%' margin='0.5rem 0.5rem' onClick={FecharModalCadastroChapa}>Fechar</Button>
            </DivLinha>
            <ModalContainer>
            <ModalForm >

            <DivLinha >
                <DivColuna width='25%' margin='0 0.5rem'>
                    <Label tamanho='pequeno'>Código da Chapa</Label>
                    <InputForm type="number" tamanho='medio' width='85%' required></InputForm>
                </DivColuna>
                <DivColuna width='70%' margin='0 0.5rem'>
                    <Label tamanho='pequeno'>Material</Label>
                    <SelectForm tamanho='medio' width='100%' required>

                    </SelectForm>
                </DivColuna>
            </DivLinha>
                <DivLinha>
                <DivColuna width='100%' margin='0 0.5rem'>
                    <Label tamanho='pequeno'>Descrição</Label>
                    <InputForm type="text" tamanho='medio' width='92%' required></InputForm>
                </DivColuna>

                </DivLinha>

            <DivLinha >
                <DivColuna width='33%' margin='0 0.5rem'>
                    <Label tamanho='pequeno'>Comprimento</Label>
                    <InputForm type="number" tamanho='medio' width='85%' required></InputForm>
                </DivColuna>
                <DivColuna width='33%' margin='0 0.5rem'>
                    <Label tamanho='pequeno'>Altura</Label>
                    <InputForm type="number" tamanho='medio' width='85%' required></InputForm>
                </DivColuna>
                <DivColuna width='33%' margin='0 0.5rem'>
                    <Label tamanho='pequeno'>Espessura</Label>
                    <InputForm type="number" tamanho='medio' width='85%' required></InputForm>
                </DivColuna>
            </DivLinha>
            <Button secundario tamanho='medio' width='40%'>Salvar</Button>
            
            </ModalForm>
            </ModalContainer>
        </ModalCadastroDeChapaContainer>
        </Overlay>
    )
}

export default ModalCadastroDeChapa