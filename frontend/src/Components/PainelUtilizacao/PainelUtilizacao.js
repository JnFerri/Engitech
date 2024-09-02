import styled from "styled-components";
import CalculadoraAproveitamento from "../CalculaldoraAproveitamento/CalculadoraAproveitamento.js";
import { useMenuLateral } from "../../Context/MenuLateral.js";
import ChapasCadastradas from "../ChapasCadastradas/ChapasCadastradas.js";


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
    const {OpcaoSelecionadaMenuLateral} = useMenuLateral()

    return(
        <PainelContainer>
            {
                OpcaoSelecionadaMenuLateral === 'CalculadoraAproveitamento' ?
                <CalculadoraAproveitamento/>
                :
                OpcaoSelecionadaMenuLateral === 'ChapasCadastradas' ?
                <ChapasCadastradas/>
                :
                OpcaoSelecionadaMenuLateral === 'RetalhosEstoque' ?
                ''
                :
                ''
            }
           
        </PainelContainer>
    )
}

export default PainelUtilizacao