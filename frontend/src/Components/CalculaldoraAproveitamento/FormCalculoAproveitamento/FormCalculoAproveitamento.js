import styled from "styled-components";
import DivLinha from "../../DivLinha/DivLinha.js";
import DivColuna from "../../DivColuna/DivColuna.js";
import Label from "../../Label/Label.js";
import InputForm from "../../InputForm/InputForm.js";
import SelectForm from "../../SelectForm/SelectForm.js";
import imagemMedidas from '../../../Images/Medidas_chapas.png'
import Imagem from "../../Imagem/Imagem.js";
import Span from "../../Span/Span.js";
import { useCalculadoraAproveitamento } from "../../../Context/CalculadoraAproveitamento.js";
import {useEffect} from 'react'
import { pegarTodosMateriais } from "../../../Services/Materiais.js";
import Button from "../../Button/Button.js";

const FormContainer = styled.section`
    width: 100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    background-color:white;
    box-shadow: 4px 4px 5px rgba(0,0,0,0.25);
    border-radius:5px;
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
    const {HandleMedidaA, HandleMedidaB, HandlePeso, HandleMaterialSelecionado, HandleEspessuraSelecionada, EspessurasOptions,MaterialSelecionado,MaterialOptions,setMaterialOptions , HandleSubmit, MedidaA, MedidaB, Peso, EspessuraSelecionada} = useCalculadoraAproveitamento()

    useEffect(() => {
        async function PegarMateriais(){
            const resultado = await pegarTodosMateriais()
                setMaterialOptions(resultado.data)
        }
        PegarMateriais()
    }
    ,[setMaterialOptions])


    return(
        <FormContainer>
            <FormCalculo onSubmit={HandleSubmit}>
                <DivLinha>
                    <DivColuna>
                        <Label tamanho = "pequeno">Medida A da Peça </Label>
                        <InputForm type="number" tamanho = "medio" width= '80%' onChange={HandleMedidaA} value={MedidaA} required placeholder="mm"></InputForm>
                    </DivColuna>
                    <DivColuna>
                        <Label tamanho = "pequeno">Medida B da Peça</Label>
                        <InputForm type="number" tamanho = "medio" width= '80%' onChange={HandleMedidaB} value={MedidaB} required placeholder="mm"></InputForm>
                    </DivColuna>
                </DivLinha>
                <DivLinha>
                    <DivColuna>
                        <Label tamanho = "pequeno">Peso da Peça (kg)</Label>
                        <InputForm type="number" tamanho = "medio" width= '80%' onChange={HandlePeso} value={Peso} required placeholder="kg"></InputForm>
                    </DivColuna>
                    <DivColuna>
                        <Label tamanho = "pequeno">Material</Label>
                        <SelectForm tamanho = "medio" width= '86%' onChange={HandleMaterialSelecionado} value={MaterialSelecionado} required>
                            <option>Selecione o Material</option>
                            {
                                MaterialOptions  ?
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
                {EspessurasOptions ? 
                <DivColuna>
                        <Label tamanho = "pequeno">Espessura</Label>
                        <SelectForm tamanho = "medio" width= '86%' onChange={HandleEspessuraSelecionada} value={EspessuraSelecionada} required>
                            <option>Selecione a Espessura</option>
                            {
                                EspessurasOptions ?
                                EspessurasOptions.map((dado,index) => (
                                    <option value={dado.cha_espessura} key={index}>{dado.cha_espessura}mm</option>
                                ))
                                :
                                ''
                            }
                        </SelectForm>
                    
                    </DivColuna>
                    :
                    null
                }
                            <Span width='100%' style={{display:'flex', justifyContent:'center', alignItems:'center' }}>Caso não houver a espessura da peça, significa que não há chapa deste material e espessura cadastradas.</Span>
                </DivLinha>
                            <Button secundario tamanho='medio' width='60%'>Calcular</Button>
            </FormCalculo>

            <Imagem src={imagemMedidas} alt="Medidas das peças medida A menor e B Maior." width='30%' margin='0px 2rem 0px 0px'/>
            
        </FormContainer>
    )
}

export default FormCalculoAproveitamento