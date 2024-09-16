import styled from "styled-components";
import DivColuna from "../../DivColuna/DivColuna.js";
import Label from "../../Label/Label.js";
import InputForm from "../../InputForm/InputForm.js";
import { useCalculadoraPesoChapa } from "../../../Context/CalculadoraPesoChapa.js";
import {pegarTodosMateriais} from '../../../Services/Materiais.js'
import { useEffect } from "react";
import SelectForm from "../../SelectForm/SelectForm.js";
import Button from '../../Button/Button.js'
import {useCalculadoraAproveitamento} from '../../../Context/CalculadoraAproveitamento.js'

const FormCalculadoraPesoChapaContainer = styled.form`
    width:100%;
    display:flex;
    align-items:bottom;
    justify-content:space-around;
    background-color:white;
    box-shadow: 4px 4px 5px rgba(0,0,0,0.25);
    border-radius:5px;
`

 function FormCalculadoraPesoChapa(){
    const { EspessuraFormCalculadoraPesoChapa , HandleEspessuraFormCalculadoraPesoChapa, AlturaFormCalculadoraPesoChapa , HandleAlturaFormCalculadoraPesoChapa, ComprimentoFormCalculadoraPesoChapa , HandleComprimentoFormCalculadoraPesoChapa, MaterialFormCalculadoraPesoChapa , HandleMaterialFormCalculadoraPesoChapa,  HandleCalcularPesoChapa} = useCalculadoraPesoChapa()
    const {setMaterialOptions,MaterialOptions} = useCalculadoraAproveitamento()


    useEffect(() => {
        async function PegarMateriais(){
            try {
                const resultado = await pegarTodosMateriais();
                setMaterialOptions(resultado.data); // Certifique-se de que resultado.data seja um array
            } catch (error) {
                console.error("Erro ao pegar materiais:", error);
            }
        }
        PegarMateriais()
    }
    ,[setMaterialOptions])

    return(
        <FormCalculadoraPesoChapaContainer onSubmit={async(e) => await HandleCalcularPesoChapa(e)}>
            <DivColuna width='15%'>
                <Label >Espessura (mm)</Label>
                <InputForm tamanho = 'medio' type="number" required onChange={HandleEspessuraFormCalculadoraPesoChapa} value={EspessuraFormCalculadoraPesoChapa} />
            </DivColuna>
            <DivColuna width='20%'>
                <Label >Altura (mm)</Label>
                <InputForm tamanho = 'medio' type="number" required onChange={HandleAlturaFormCalculadoraPesoChapa} value={AlturaFormCalculadoraPesoChapa} />
            </DivColuna>
            <DivColuna width='20%'>
                <Label >comprimento (mm)</Label>
                <InputForm tamanho = 'medio' type="number" required onChange={HandleComprimentoFormCalculadoraPesoChapa} value={ComprimentoFormCalculadoraPesoChapa} />
            </DivColuna>
            <DivColuna width='20%'>
                <Label >Material</Label>
                <SelectForm tamanho='medio' required onChange={HandleMaterialFormCalculadoraPesoChapa} value={MaterialFormCalculadoraPesoChapa}>
                    <option value=''>Selecione o Material</option>
                    {
                        MaterialOptions ?
                        MaterialOptions.map((item,index) => (
                            <option key={index} value={item.mat_id}>{item.mat_nome}</option>
                        ))
                        :
                        <option value='' disabled>Nenhum Material Disponivel</option>
                    }
                </SelectForm>
            </DivColuna>
            <Button secundario tamanho='grande' type='submit' width='15%'>Calcular</Button>
        </FormCalculadoraPesoChapaContainer>
    )
}

export default FormCalculadoraPesoChapa