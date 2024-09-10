import styled from "styled-components";
import CalculadoraAproveitamento from "../CalculaldoraAproveitamento/CalculadoraAproveitamento.js";
import { useMenuLateral } from "../../Context/MenuLateral.js";
import ChapasCadastradas from "../ChapasCadastradas/ChapasCadastradas.js";
import TodosUsuarios from "../TodosUsuarios/TodosUsuarios.js";
import CadastroUsuario from "../CadastroUsuario/CadastroUsuario.js";


const PainelContainer = styled.section`
display:flex;
flex-direction:column;
background-color:#c6cace;
width: 85%;
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
                OpcaoSelecionadaMenuLateral === 'TodosUsuarios' ?
                <TodosUsuarios/>
                :
                OpcaoSelecionadaMenuLateral === 'CadastrarUsuario' ?
                <CadastroUsuario/>
                :
                null
            }
           
        </PainelContainer>
    )
}

export default PainelUtilizacao