
import styled from "styled-components";
import DivColuna from "../../DivColuna/DivColuna.js";
import Label from "../../Label/Label.js";
import InputForm from "../../InputForm/InputForm.js";
import Button from "../../Button/Button.js";
import SelectForm from "../../SelectForm/SelectForm.js";
import { useEffect } from "react";
import { pegarTodosMateriais } from "../../../Services/Materiais.js";
import { useChapasCadastradas } from "../../../Context/ChapasCadastradas.js";

const FormPesquisaChapasContainer = styled.section`
    width: 100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    background-color:white;
    box-shadow: 4px 4px 5px rgba(0,0,0,0.25);
    border-radius:5px;
`

const FormPesquisa = styled.form`
    width: 100%;
    display:flex;
    align-items:end;
    justify-content:space-between;
    margin:0.5rem;
`

function FormPesquisaChapas(){
    const {HandleTipoPesquisaSelecionado, TipoPesquisaSelecionado ,setOpcoesMateriais, OpcoesMateriais ,HandlePegaDadosPesquisados ,InputPesquisaValor, HandleInputPesquisaValor} = useChapasCadastradas()

    useEffect(() => {
        async function PegarMateriais(){
            const resultado = await pegarTodosMateriais()
            setOpcoesMateriais(resultado.data)
        }
        PegarMateriais()
    }
    ,[setOpcoesMateriais])

    return(
        <FormPesquisaChapasContainer  onSubmit={HandlePegaDadosPesquisados}>
            <FormPesquisa>
            <DivColuna width='20%'>
                <Label tamanho='pequeno'>Tipo de Pesquisa</Label>
                <SelectForm tamanho = 'pequeno' onChange={HandleTipoPesquisaSelecionado} value={TipoPesquisaSelecionado}>
                    <option value='codigo'>Código</option>
                    <option value='material'>Material</option>
                </SelectForm>
            </DivColuna>
            {
                TipoPesquisaSelecionado === 'codigo' ?
                <DivColuna width='55%'>
                <Label tamanho='pequeno'>Pesquisa</Label>
                <InputForm type="text" tamanho = 'pequeno' placeholder="código da chapa" value={InputPesquisaValor} onChange={HandleInputPesquisaValor}/>
            </DivColuna>
                :
                TipoPesquisaSelecionado === 'material' ?
                
                <DivColuna width='55%'>
                <Label tamanho='pequeno'>Pesquisa</Label>
                <SelectForm tamanho = 'pequeno' value={InputPesquisaValor} onChange={HandleInputPesquisaValor}>
                    <option>Selecione o Material</option>
                    {
                        OpcoesMateriais ?
                        OpcoesMateriais.map((dado,index) => (
                            <option value={dado.mat_id} key={index}>{dado.mat_nome}</option>
                        ))
                        :
                        ''
                    }
                </SelectForm>
            </DivColuna>
                : 
                ''
                
            }
            

            
            <Button secundario tamanho='pequeno' width='20%'>Pesquisar</Button>
            
            </FormPesquisa>
        </FormPesquisaChapasContainer>
    )
}

export default FormPesquisaChapas


