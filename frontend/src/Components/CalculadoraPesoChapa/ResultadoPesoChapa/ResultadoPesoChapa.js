import styled from "styled-components";
import Titulo2 from "../../Titulo2/Titulo2.js";
import Span from "../../Span/Span.js";
import { useCalculadoraPesoChapa } from "../../../Context/CalculadoraPesoChapa.js";
import DivColuna from "../../DivColuna/DivColuna.js";



const ResultadoPesoChapaContainer = styled.section`
    width:100%;
    min-heigth:40vh;
    background-color:white;
    box-shadow: 4px 4px 5px rgba(0,0,0,0.25);
    border-radius:5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:1rem 0;
    margin:1rem 0;
`


function ResultadoPesoChapa(){
    const {DadosChapaResultado} = useCalculadoraPesoChapa()
    return(
        <ResultadoPesoChapaContainer>
                {
                    DadosChapaResultado.resultado > 0?
                    <div>
                    <DivColuna>
                        <Titulo2 color='orange'>Informações da Chapa</Titulo2>
                        <Span>Tamanho : {`${DadosChapaResultado.espessura} X ${DadosChapaResultado.altura} X ${DadosChapaResultado.comprimento} mm`}</Span>
                        <Span>Material : {DadosChapaResultado.material}</Span>
                    </DivColuna>
                    <DivColuna>
                        <Titulo2 color = 'orange'>Resultado Peso da Chapa</Titulo2>
                        <Span tamanho='35px'>{DadosChapaResultado.resultado} KG</Span>
                    </DivColuna>
                    </div>
                    :
                    <Span>Sem Resultados, faça o calculo...</Span>
                }

        </ResultadoPesoChapaContainer>
    )
}

export default ResultadoPesoChapa