import styled from "styled-components";
import CalculadoraAproveitamento from "../CalculaldoraAproveitamento/CalculadoraAproveitamento.js";
import { useMenuLateral } from "../../Context/MenuLateral.js";
import ChapasCadastradas from "../ChapasCadastradas/ChapasCadastradas.js";
import TodosUsuarios from "../TodosUsuarios/TodosUsuarios.js";
import CadastroUsuario from "../CadastroUsuario/CadastroUsuario.js";
import CalculadoraPesoChapa from "../CalculadoraPesoChapa/CalculadoraPesoChapa.js";
import { useMenuLateralMock } from "../../stories/Mocks/MenuLateralContext.mock.js";


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
    const hookMenu = window.__STORYBOOK_ADDONS_CHANNEL__ === undefined ? useMenuLateral : useMenuLateralMock
    const {OpcaoSelecionadaMenuLateral} = hookMenu()

    return(
        <PainelContainer>
            {
                OpcaoSelecionadaMenuLateral === 'CalculadoraAproveitamento' ?
                <CalculadoraAproveitamento/>
                :
                OpcaoSelecionadaMenuLateral === 'ChapasCadastradas' ?
                <ChapasCadastradas/>
                :
                OpcaoSelecionadaMenuLateral === 'CalculadoraPesoChapas' ?
                <CalculadoraPesoChapa/>
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