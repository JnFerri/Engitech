import styled from "styled-components";
import { useCalculadoraAproveitamento } from "../../../Context/CalculadoraAproveitamento.js";
import DivLinha from "../../DivLinha/DivLinha.js";
import DivColuna from "../../DivColuna/DivColuna.js";
import Label from "../../Label/Label.js";
import Span from "../../Span/Span.js";
import ordenarChapasPorMenorPerda from "../../../Helpers/ordenarChapasMenorPerda.js";
import { useCalculadoraAproveitamentoMock } from "../../../stories/Mocks/CalculadoraAproveitamentoContext.mock.js";


const PainelResultadoAproveitamentoContainer = styled.section`
    width: 100%;
    display:flex;
    align-items:center;
    justify-content: space-around;
    background-color:white;
    box-shadow: 4px 4px 5px rgba(0,0,0,0.25);
    border-radius:5px;
    flex-wrap:wrap;
    margin:1rem 0;
    
`


const ItemResultadoContainer = styled.div`
    width: 22.5%;
    border:0.5px solid black;
    border-radius:5px;
    box-shadow: 2px 2px 3px rgba(0,0,0,0.25);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    margin: 1rem 0;
    background-color: ${props => props.index === 0 ? '#a9dbc2' : 'white'};
    `

function PainelResultadoAproveitamento(){
    const hook = window.__STORYBOOK_ADDONS_CHANNEL__ === undefined ? useCalculadoraAproveitamento : useCalculadoraAproveitamentoMock
    const {DadosResultado , AbreVisualizacaoCriaRetangulosPosicionamentos} = hook()

    return (
        <PainelResultadoAproveitamentoContainer>
            {
                DadosResultado.length > 0 &&
                ordenarChapasPorMenorPerda(DadosResultado).map((dado,index) => (
                    Math.min(parseFloat(dado.perda_horizontal) , parseFloat(dado.perda_vertical), parseFloat(dado.perda_misturado) ) > 0 ?
                    <ItemResultadoContainer key={index} index={index} onClick={async () => await AbreVisualizacaoCriaRetangulosPosicionamentos(dado)}>
                        <DivLinha style={{width:'100%' , backgroundColor :'#314159'}}>
                            <DivColuna width='95%'>
                                <Label tamanho = "pequeno" color = 'white' >Código Chapa</Label>
                                <Span color = 'white'>{dado.cha_codigo}</Span>
                            </DivColuna>
                        </DivLinha>
                        <DivLinha margin='0.5rem 0'>
                            <DivColuna width='95%'>
                                <Label tamanho = "pequeno">Tamanho</Label>
                                <Span>{dado.cha_altura}mm x {dado.cha_comprimento}mm</Span>
                            </DivColuna>
                        </DivLinha >
                        {
                            dado.cha_comprimento > 3000 || dado.cha_altura > 1240 ?
                            <Span color='red'>Apenas Puncionadeira</Span>
                            : 
                            <br></br>
                        }
                        <DivLinha margin='0.5rem 0'>
                        <DivColuna width='95%'>
                                <Label tamanho = "pequeno">Menor Perda na Chapa</Label>
                                <Span>{Math.min(parseFloat(dado.perda_horizontal) , parseFloat(dado.perda_vertical), parseFloat(dado.perda_misturado) )} %</Span>
                            </DivColuna>
                        </DivLinha>
                    </ItemResultadoContainer>
                    :
                    <Span>Verifique os valores colocados no formulario, pois perda possui valor negativo...</Span>
                )
                    
            )
            }
        </PainelResultadoAproveitamentoContainer>
    )
}

export default PainelResultadoAproveitamento