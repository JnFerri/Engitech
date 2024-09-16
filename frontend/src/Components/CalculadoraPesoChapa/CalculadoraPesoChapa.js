import styled from "styled-components";
import FormCalculadoraPesoChapa from "./FormCalculadoraPesoChapa/FormCalculadoraPesoChapa.js";
import ResultadoPesoChapa from "./ResultadoPesoChapa/ResultadoPesoChapa.js";



const CalculadoraPesoChapaContainer = styled.section`

display:flex;
flex-direction:column;
height:auto;
width:95%;
margin: 1rem 0;
`


function CalculadoraPesoChapa(){
    return(
        <CalculadoraPesoChapaContainer>
            <FormCalculadoraPesoChapa/>
            <ResultadoPesoChapa/>
        </CalculadoraPesoChapaContainer>
    )
}

export default CalculadoraPesoChapa