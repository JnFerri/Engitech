import styled from "styled-components";
import FormCalculoAproveitamento from "./FormCalculoAproveitamento/FormCalculoAproveitamento.js";

const CalculadoraAproveitamentoContainer = styled.section`

display:flex;
flex-direction:column;
height:auto;
width:95%;
margin: 1rem 0;
`


function CalculadoraAproveitamento(){
    return(
        <CalculadoraAproveitamentoContainer>
            <FormCalculoAproveitamento/>
        </CalculadoraAproveitamentoContainer>
    )
}

export default CalculadoraAproveitamento

