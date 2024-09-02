import styled from "styled-components";
import DivLinha from "../../DivLinha/DivLinha.js";
import DivColuna from "../../DivColuna/DivColuna.js";
import Label from "../../Label/Label.js";
import InputForm from "../../InputForm/InputForm.js";
import SelectForm from "../../SelectForm/SelectForm.js";
import imagemMedidas from '../../../Images/Medidas_chapas.png'
import Imagem from "../../Imagem/Imagem.js";
import Span from "../../../Span/Span.js";
import { useCalculadoraAproveitamento } from "../../../Context/CalculadoraAproveitamento.js";
import {useEffect} from 'react'
import { pegarTodosMateriais } from "../../../Services/Materiais.js";

const FormContainer = styled.section`
    width: 100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    background-color:white;
    box-shadow: 4px 4px 5px rgba(0,0,0,0.5);
    border-radius:5px;
    padding: 0 0.5rem;
`

const FormCalculo = styled.form`
    width: 50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    margin:0.5rem;
`


function FormCalculoAproveitamento() {
    const {HandleMedidaA, HandleMedidaB, HandlePeso, HandleMaterialSelecionado, HandleEspessuraSelecionada, EspessuraOptions,MaterialSelecionado,MaterialOptions,setMaterialOptions} = useCalculadoraAproveitamento()

    useEffect(() => {
        async function PegarMateriais(){
            const resultado = await pegarTodosMateriais()
                setMaterialOptions(resultado.data)
        }
        PegarMateriais()
    }
    ,[setMaterialOptions])

    useEffect(() => {
        console.log(MaterialSelecionado)
    },[MaterialSelecionado])

    return(
        <FormContainer>
            <FormCalculo>
                <DivLinha>
                    <DivColuna>
                        <Label tamanho = "pequeno">Medida A da Peça</Label>
                        <InputForm type="number" tamanho = "medio" width= '80%' onChange={HandleMedidaA}></InputForm>
                    </DivColuna>
                    <DivColuna>
                        <Label tamanho = "pequeno">Medida B da Peça</Label>
                        <InputForm type="number" tamanho = "medio" width= '80%' onChange={HandleMedidaB}></InputForm>
                    </DivColuna>
                </DivLinha>
                <DivLinha>
                    <DivColuna>
                        <Label tamanho = "pequeno">Peso da Peça</Label>
                        <InputForm type="number" tamanho = "medio" width= '80%' onChange={HandlePeso}></InputForm>
                    </DivColuna>
                    <DivColuna>
                        <Label tamanho = "pequeno">Material</Label>
                        <SelectForm tamanho = "medio" width= '86%' onChange={HandleMaterialSelecionado} value={MaterialSelecionado}>
                            <option>Selecione o Material</option>
                            {
                                MaterialOptions ?
                                MaterialOptions.map((dado,index) => (
                                    <option value={dado.mat_id} key={index}>{dado.mat_nome}</option>
                                ))
                                :
                                ''
                            }
                        </SelectForm>
                    </DivColuna>
                </DivLinha>
                <DivLinha>
                <DivColuna>
                        <Label tamanho = "pequeno">Espessura</Label>
                        <SelectForm tamanho = "medio" width= '93%' onChange={HandleEspessuraSelecionada}>
                            <option>Selecione a Espessura</option>
                            {
                                EspessuraOptions ?
                                EspessuraOptions.map((dado,index) => (
                                    <option value={dado.cha_espessura} key={index}>{dado.cha_espessura}</option>
                                ))
                                :
                                ''
                            }
                        </SelectForm>
                    
                            <Span width='93%'>Caso não houver a espessura da peça, significa que não há chapa deste material e espessura cadastradas.</Span>
                    </DivColuna>

                </DivLinha>
            </FormCalculo>

            <Imagem src={imagemMedidas} alt="Medidas das peças medida A menor e B Maior." width='30%' margin='0px 2rem 0px 0px'/>
            
        </FormContainer>
    )
}

export default FormCalculoAproveitamento