import styled from "styled-components";
import CalculadoraAproveitamento from "../CalculaldoraAproveitamento/CalculadoraAproveitamento.js";


const PainelContainer = styled.section`
display:flex;
flex-direction:column;
background-color:#c6cace;
width: 80%;
height:100%;
overflow:auto;
align-items:center;
`

function PainelUtilizacao(){
    return(
        <PainelContainer>
           <CalculadoraAproveitamento/>
        </PainelContainer>
    )
}

export default PainelUtilizacao