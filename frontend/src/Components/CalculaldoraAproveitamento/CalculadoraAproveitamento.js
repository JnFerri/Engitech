import styled from "styled-components";
import FormCalculoAproveitamento from "./FormCalculoAproveitamento/FormCalculoAproveitamento.js";
import { useCalculadoraAproveitamento } from "../../Context/CalculadoraAproveitamento.js";
import PainelResultadoAproveitamento from "./PainelResultadoCalculoAproveitamento/PainelResultadoAproveitamento.js";
import ModalVisualizacaoResultadoAproveitamento from "./ModalVisualizacaoResultadoAproveitamento/ModalVisualizacaoResultadoAproveitamento.js";
import { useCalculadoraAproveitamentoMock } from "../../stories/Mocks/CalculadoraAproveitamentoContext.mock.js";


const CalculadoraAproveitamentoContainer = styled.section`

display:flex;
flex-direction:column;
height:auto;
width:95%;
margin: 1rem 0;
`


function CalculadoraAproveitamento(){

    const hook = window.__STORYBOOK_ADDONS_CHANNEL__ === undefined ?   useCalculadoraAproveitamento :  useCalculadoraAproveitamentoMock

    const { DadosResultado ,ModalVisualizacaoEstaVisivel , DadosChapaVisualizacao } = hook()


    
    
    const isEmptyObject = (obj) => {
        return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
    };

    return(
        <CalculadoraAproveitamentoContainer>
            {
                ModalVisualizacaoEstaVisivel && !isEmptyObject(DadosChapaVisualizacao) ?
                <ModalVisualizacaoResultadoAproveitamento />
                :
                <div>
                    <FormCalculoAproveitamento/>
                    {
                        DadosResultado.length > 0 ? 
                        <PainelResultadoAproveitamento/>
                        :   
                        null
                    }
                </div>
            }
        </CalculadoraAproveitamentoContainer>
    )
}

export default CalculadoraAproveitamento

